class OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :divisions
  has_many :users
  has_many :news_posts
  has_many :event_posts
end
