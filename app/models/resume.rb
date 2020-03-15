class Resume < ApplicationRecord
  belongs_to :user
  has_one :content, as: :contentable

  has_many :resume_in_portfolios
  has_many :portfolios, through: :resume_in_portfolios

  mount_uploader :cover, CoverUploader
end
