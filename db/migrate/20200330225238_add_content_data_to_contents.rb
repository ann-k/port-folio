class AddContentDataToContents < ActiveRecord::Migration[6.0]
  def change
    add_column :contents, :content_data, :json
  end
end
