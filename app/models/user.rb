class User < ApplicationRecord
  has_many :portfolios
  has_many :projects
  has_many :resumes
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :name, presence: true
  validates :name, uniqueness: true, case_sensitive: false, if: -> { self.name.present? }
end
