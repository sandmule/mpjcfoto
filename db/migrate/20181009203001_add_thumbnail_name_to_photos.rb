class AddThumbnailNameToPhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :thumbnail_name, :string
  end
end
