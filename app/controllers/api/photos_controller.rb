class Api::PhotosController < ApplicationController
  def get_albums
    response = {}
    Album.all.each do |album|
      next if album.photos.empty?
      response[album.name] = { alt: album.name, src: album.photos.first.url, width: album.photos.first.width, height: album.photos.first.height}
    end
    render json: response
  end

  def get_images
    response = {}
    Album.find_by(name: params['album_name']).photos.each do |photo|
      next if photo.file_type == 'video'
      response[photo.name] = { src: photo.url, width: photo.width, height: photo.height}
    end
    render json: response
  end

  def remove_file
    album = params['album']
    params['itemsForDelete'].each do |photo|
      Photo.delete_photo(photo['src'], album)
    end
  end
end
