class Content < ApplicationRecord
  belongs_to :contentable, polymorphic: true

  def to_param
    [contentable_type.downcase, id].join("-")
  end
end
