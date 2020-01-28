json.extract! content, :id, :contentable_id, :contentable_type, :created_at, :updated_at
json.url content_url(content, format: :json)
