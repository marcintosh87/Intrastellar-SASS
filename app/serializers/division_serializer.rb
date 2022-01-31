class DivisionSerializer < ActiveModel::Serializer
  attributes :id, :name, :active
  belongs_to :organization
  has_many :users
end
