class User < ApplicationRecord
  belongs_to :division
  has_one_attached :avatar
  has_many :news_posts
  has_many :news_comments, through: :news_posts
  has_many :event_posts
  has_many :events_comments, through: :event_posts
end
