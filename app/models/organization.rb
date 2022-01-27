class Organization < ApplicationRecord
  has_many :divisions
  has_many :users, through: :divisions
  has_many :news_posts, through: :divisions
  has_many :event_posts, through: :divisions
end
