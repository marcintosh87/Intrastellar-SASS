class User < ApplicationRecord
  belongs_to :division
  has_one_attached :avatar
end
