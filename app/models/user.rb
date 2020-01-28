class User < ApplicationRecord
  has_many :projects
  has_many :portfolios
  has_many :resumes
end
