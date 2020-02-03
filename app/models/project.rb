class Project < ApplicationRecord
  belongs_to :user
  has_many :portfolios, through: :project_in_portfolios
  has_one :content, as: :contentable

  mount_uploader :cover, CoverUploader
end
