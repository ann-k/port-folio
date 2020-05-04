class ContentImage < ApplicationRecord
  mount_uploader :data, DataUploader

  # belongs_to :content
end
