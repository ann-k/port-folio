class Project < ApplicationRecord
  scope :ordered_by_creation, -> { order(created_at: :desc) }
  scope :ordered_by_position, -> { includes(:project_in_portfolios).order('project_in_portfolios.position ASC') }

  belongs_to :user
  has_one :content, as: :contentable, dependent: :destroy

  has_many :project_in_portfolios, dependent: :destroy
  has_many :portfolios, through: :project_in_portfolios

  mount_uploader :cover, CoverUploader
end
