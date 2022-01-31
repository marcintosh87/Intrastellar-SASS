class UserSerializer < ActiveModel::Serializer
  attributes :id,
             :first_name,
             :last_name,
             :administrator,
             :email,
             :position,
             :active,
             :hire_date,
             :profile_image
      

  belongs_to :division
  has_many :news_posts
  has_many :event_posts
 

  def profile_image
    Rails.application.routes.url_helpers.rails_blob_path(self.object.avatar, only_path: true)
  end

  def hired
    return self.object.hired_date.to_formatted_s(:long)
  end
end
