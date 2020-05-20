class Content < ApplicationRecord
  belongs_to :contentable, polymorphic: true
  # has_many :content_images, dependent: :destroy

  before_create :create_slug

  def to_param
    [contentable_type.downcase, slug].join("-")
  end

  def create_slug
    loop do
      self.slug = SecureRandom.hex(6)
      break unless Content.where(slug: slug).exists?
    end
  end
end
