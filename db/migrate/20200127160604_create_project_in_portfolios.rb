class CreateProjectInPortfolios < ActiveRecord::Migration[6.0]
  def change
    create_table :project_in_portfolios do |t|
      t.integer :order
      t.integer :portfolio_id
      t.integer :project_id

      t.timestamps
    end
  end
end
