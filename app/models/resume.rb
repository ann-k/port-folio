class Resume < ApplicationRecord
  belongs_to :user
  has_one :content, as: :contentable, dependent: :destroy

  has_many :resume_in_portfolios, dependent: :destroy
  has_many :portfolios, through: :resume_in_portfolios
  accepts_nested_attributes_for :resume_in_portfolios, allow_destroy: true

  mount_uploader :cover, CoverUploader
end
