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
end
