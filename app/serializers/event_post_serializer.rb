class EventPostSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :content,
             :event_allday,
             :date_of_event,
             :time,
             :event_location,
             :division_target,
             :topic,
             :claps,
             :clicks,
             :image_post,
             :event_time,
             :mail_time,
             :event_date
            

  belongs_to :user
  belongs_to :division
  has_many :e_comments

  

  def date_of_event
    return self.object.event_date.strftime('%b %d %Y')
  end

  def time
    return self.object.event_time.utc.strftime("%H:%M")
    
  end

  def mail_time
    return self.object.event_time.to_formatted_s(:time)
  end
  
  
# Add back when images are ready
  def image_post
    return Rails.application.routes.url_helpers.rails_blob_path(self.object.avatar, only_path: true)
  end
end
