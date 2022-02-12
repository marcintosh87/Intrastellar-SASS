class NewsCommnetsSerializer < ActiveModel::Serializer
  
  include Rails.application.routes.url_helpers
  attributes :id, :news_post_id, :user_id, :comment, :profile_image
  belongs_to :user, serializer: UserSerializer

  def profile_image
    rails_blob_path(object.user.avatar, only_path: true) if object.user.avatar.attached?
  end
  
end
