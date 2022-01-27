class EventPost < ApplicationRecord
  belongs_to :user
  belongs_to :division
  has_one_attached :avatar
  has_many :events_comments
end
