class EventsComment < ApplicationRecord
  belongs_to :news_post
  belongs_to :user
end
