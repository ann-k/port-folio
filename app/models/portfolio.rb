class Portfolio < ApplicationRecord
  scope :ordered_by_creation, -> { order(created_at: :desc) }

  belongs_to :user
  has_one :content, as: :contentable, dependent: :destroy

  has_many :project_in_portfolios, dependent: :destroy
  has_many :projects, through: :project_in_portfolios
  accepts_nested_attributes_for :project_in_portfolios, allow_destroy: true

  has_many :resume_in_portfolios, dependent: :destroy
  has_many :resumes, through: :resume_in_portfolios
  accepts_nested_attributes_for :resume_in_portfolios, allow_destroy: true

  mount_uploader :cover, CoverUploader
end
