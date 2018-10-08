class Photo < ApplicationRecord
  belongs_to :album

  def self.add_files(name, url)
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
    end
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
