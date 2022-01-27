class Division < ApplicationRecord
  belongs_to :organization
  has_many :users
  has_many :news_posts, through: :users
  has_many :event_posts, through: :users
end
