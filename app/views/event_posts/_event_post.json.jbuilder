json.extract! event_post, :id, :date_created, :title, :content, :event_date, :event_time, :event_allday, :event_location, :division_target, :avatar, :topic, :claps, :clicks, :user_id, :division_id, :created_at, :updated_at
json.url event_post_url(event_post, format: :json)
json.avatar url_for(event_post.avatar)
