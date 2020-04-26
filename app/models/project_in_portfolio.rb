class ProjectInPortfolio < ApplicationRecord
  # default_scope { order(position: :asc) }
  scope :ordered_by_position, -> { order(position: :asc) }
  
  belongs_to :portfolio
  belongs_to :project
end
