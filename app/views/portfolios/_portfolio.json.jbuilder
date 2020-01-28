json.extract! portfolio, :id, :name, :description, :cover, :language, :title, :body, :user_id, :created_at, :updated_at
json.url portfolio_url(portfolio, format: :json)
