class Project < ApplicationRecord
  belongs_to :user
  has_one :content, as: :contentable

  has_many :project_in_portfolios
  has_many :portfolios, through: :project_in_portfolios

  mount_uploader :cover, CoverUploader
end
