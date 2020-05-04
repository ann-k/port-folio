class CreateContentImages < ActiveRecord::Migration[6.0]
  def change
    create_table :content_images do |t|
      t.json :data

      t.timestamps
    end
  end
end
