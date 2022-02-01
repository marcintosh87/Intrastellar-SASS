class EventPostSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :content,
             :event_allday,
             :event_date,
             :event_location,
             :division_target,
             :topic,
             :claps,
             :clicks,
             :created_date

  belongs_to :user
  belongs_to :division
  has_many :news_comments

  def created_date
    return self.object.created_at.strftime('%m-%d-%Y')
  end
end
