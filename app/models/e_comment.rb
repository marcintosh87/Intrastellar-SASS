class EComment < ApplicationRecord
  belongs_to :user
  belongs_to :event_post
end
