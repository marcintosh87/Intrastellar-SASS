class NewsPostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :title, :content, :division_target, :claps, :clicks, :date, :image_post
  belongs_to :user
  belongs_to :division
  has_many :news_comments, serializer: NewsCommnetsSerializer 
 
  

  def date
    return self.object.created_at.strftime('%b %d %Y')
    
  end
  
  def image_post
    return rails_blob_path(object.avatar, only_path: true) if object.avatar.attached?
  end
end
