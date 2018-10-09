class Api::PhotosController < ApplicationController
  def get_albums
    response = {}
    Album.all.each do |album|
      next if album.photos.empty?
      response[album.name] = { alt: album.name, src: album.photos.first.url, width: album.photos.first.width, height: album.photos.first.height}
    end
    render json: response
  end

  def get_files
    case params['file_type']
    when 'image'
      response = get_images
    when 'video_thumbnail'
      response = get_video_thumbnail
    when 'video_file'
      response = get_video_file
    end

    render json: response
  end

  def get_images
    response = {}
    Album.find_by(name: params['album_name']).photos.each do |photo|
      response[photo.name] = { src: photo.url, width: photo.width, height: photo.height }
    end

    response
  end

  def get_video_thumbnail
    response = {}
    Photo.where(file_type: 'video').each do |video|
      name = get_video_name(video.name)
      response[video.name] = { src: name[1], alt: video.thumbnail_name, width: 1, height: 1 }
    end

    response
  end

  def get_video_file
    video = Photo.find_by(thumbnail_name: params['file_name'])
    { src: video.url, thumbnail: get_video_name(video.name)[1] }
  end

  def remove_file
    album = params['album']
    params['itemsForDelete'].each do |photo|
      Photo.delete_photo(photo['src'], album)
    end
  end

  def get_video_name(name)
    name_without_ext = name.match(/(.*)\.[^.]+$/)[1]
    src = "https://s3.eu-west-2.amazonaws.com/mpjcfoto-test/video_thumbnails/#{name_without_ext}.png"
    [name, src]
  end
end
