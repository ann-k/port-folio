class Content < ApplicationRecord
  belongs_to :contentable, polymorphic: true

  def to_param
    [id, contentable_type.downcase].join("-")
  end
end
