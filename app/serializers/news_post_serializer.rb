class NewsPostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :division_target, :claps, :clicks, :date, :image_post
  belongs_to :user
  belongs_to :division

  def date
    return self.object.created_at.strftime('%b %d %Y')
    
  end
  
  def image_post
    return Rails.application.routes.url_helpers.rails_blob_path(self.object.avatar, only_path: true)
  end
end
