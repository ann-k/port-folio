json.extract! resume, :id, :name, :description, :cover, :language, :title, :user_id, :created_at, :updated_at
json.url resume_url(resume, format: :json)
