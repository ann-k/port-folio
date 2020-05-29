class CreateLinks < ActiveRecord::Migration[6.0]
  def change
    create_table :links do |t|
      t.json :data

      t.timestamps
    end
  end
end
