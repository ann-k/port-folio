class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :cover
      t.string :language
      t.string :title
      t.integer :user_id

      t.timestamps
    end
  end
end
