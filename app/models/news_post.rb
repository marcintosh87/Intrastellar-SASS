class NewsPost < ApplicationRecord
  belongs_to :user
  belongs_to :division
  has_one_attached :avatar
  has_many :news_comments
end
