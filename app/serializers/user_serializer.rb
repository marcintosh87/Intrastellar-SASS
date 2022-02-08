class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id,
             :first_name,
             :last_name,
             :administrator,
             :email,
             :position,
             :active,
             :hire_date,
             :profile_image,
           
             :phone
      

  belongs_to :division
  has_many :news_posts
  has_many :event_posts
 

  def profile_image
    rails_blob_path(object.avatar, only_path: true) if object.avatar.attached?
  end

  def hired
    return self.object.hired_date.to_formatted_s(:long)
  end
end
