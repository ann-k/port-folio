class CreateResumeInPortfolios < ActiveRecord::Migration[6.0]
  def change
    create_table :resume_in_portfolios do |t|
      t.integer :position
      t.integer :portfolio_id
      t.integer :resume_id

      t.timestamps
    end
  end
end
