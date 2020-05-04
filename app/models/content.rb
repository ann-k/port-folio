class Content < ApplicationRecord
  belongs_to :contentable, polymorphic: true

  # has_many :content_images, dependent: :destroy

  def to_param
    [id, contentable_type.downcase].join("-")
  end
end
