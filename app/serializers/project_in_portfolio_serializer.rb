class ProjectInPortfolioSerializer < ActiveModel::Serializer
  attributes :id, :position, :portfolio_id, :project_id
end
