class AddSlugToContent < ActiveRecord::Migration[6.0]
  def change
    add_column :contents, :slug, :string
  end
end
