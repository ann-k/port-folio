class CreateContents < ActiveRecord::Migration[6.0]
  def change
    create_table :contents do |t|
      t.integer :contentable_id
      t.string :contentable_type

      t.timestamps
    end
  end
end
