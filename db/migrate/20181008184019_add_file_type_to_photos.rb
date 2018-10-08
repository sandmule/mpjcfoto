class AddFileTypeToPhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :file_type, :string
  end
end
