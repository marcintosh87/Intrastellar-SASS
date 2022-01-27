class EventsComment < ApplicationRecord
  belongs_to :event_post
  belongs_to :user
end
