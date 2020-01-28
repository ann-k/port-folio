class Resume < ApplicationRecord
  belongs_to :user
  has_many :portfolios, through: :resume_in_portfolios
  has_one :content, as: :contentable
end
