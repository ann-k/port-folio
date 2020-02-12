class Portfolio < ApplicationRecord
  belongs_to :user

  has_many :project_in_portfolios
  has_many :projects, through: :project_in_portfolios
  
  has_many :resume_in_portfolios
  has_many :resumes, through: :resume_in_portfolios
end
