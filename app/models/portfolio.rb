class Portfolio < ApplicationRecord
  belongs_to :user

  has_many :project_in_portfolios
  has_many :projects, -> { order 'project_in_portfolios.order' }, through: :project_in_portfolios
  accepts_nested_attributes_for :project_in_portfolios, allow_destroy: true

  has_many :resume_in_portfolios
  has_many :resumes, through: :resume_in_portfolios
  accepts_nested_attributes_for :resume_in_portfolios, allow_destroy: true

  mount_uploader :cover, CoverUploader
end
