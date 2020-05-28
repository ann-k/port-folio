class ProjectInPortfolioSerializer < ActiveModel::Serializer do
  attributes :id, :position, :portfolio_id, :project_id
end
