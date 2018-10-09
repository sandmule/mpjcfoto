class Photo < ApplicationRecord
  belongs_to :album, optional: true

  def self.add_files(name, url)
    file_type = file_type_checker(name)

    case file_type
    when 'image'
      add_photo(url, name, file_type)
    when 'video'
      add_video(url, name, file_type)
    else
      puts 'ERROR at file type'
    end
  end

  def self.add_photo(url, name, file_type)
    album_name = CGI.unescape(url.split('/')[3])
    album = Album.where(name: album_name).first_or_create do |album|
      album.name = album_name
    end

    ratio = FastImage.size(url)
    aspect_ratio = (ratio[0].to_f / ratio[1].to_f).rationalize

    where(url: url).first_or_create do |photo|
      photo.name = name
      photo.url = url
      photo.album_id = album.id
      photo.height = aspect_ratio.denominator
      photo.width = aspect_ratio.numerator
      photo.file_type = file_type
    end
  end

  def self.add_video(url, name, file_type)
    generate_thumnail(name, url)
    where(url: url).first_or_create do |video|
      video.name = name
      video.url = url
      video.file_type = file_type
      video.thumbnail_name = name.match(/(.*)\.[^.]+$/)[1]
    end
  end

  def self.file_type_checker(name)
    return 'image' if /\.(jpeg|jpg|gif|png|svg)/i.match(name)
    return 'video' if /\.(avi|flv|mkv|mov|mp4)/i.match(name)
    "bad file type: #{name.match(/\.[0-9a-z]+$/)[0]}"
  end

  def self.generate_thumnail(name, url)
    name = name.match( /(.*)\.[^.]+$/)[1]
    `avconv -i #{url} -r 1  -t 00:00:01 -f image2 tmp/#{name}.png`
    s3 = Aws::S3::Resource.new(region: ENV['AWS_REGION'])
    obj = s3.bucket(ENV['BUCKET_NAME']).object("video_thumbnails/#{name}.png")
    obj.upload_file("tmp/#{name}.png", {acl: 'public-read'})
    File.delete("tmp/#{name}.png")
  end

  def self.delete_photo(url, album_name)
    photo = find_by(url: url)
    album = Album.find_by(name: album_name)
    file_path = "#{album_name}/#{photo.name}"

    s3_client = Aws::S3::Client.new
    s3_response = s3_client.delete_object(
                                           bucket: ENV['BUCKET_NAME'],
                                           key: file_path
                                          )
    photo.destroy if s3_response.successful?
    album.destroy if album.photos.empty?
  end
end
