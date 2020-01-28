class CreatePortfolios < ActiveRecord::Migration[6.0]
  def change
    create_table :portfolios do |t|
      t.string :name
      t.text :description
      t.string :cover
      t.string :language
      t.string :title
      t.text :body
      t.integer :user_id

      t.timestamps
    end
  end
end
