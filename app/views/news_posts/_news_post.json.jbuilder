json.extract! news_post, :id, :date_created, :title, :content, :division_target, :avatar, :claps, :clicks, :user_id, :division_id, :created_at, :updated_at
json.url news_post_url(news_post, format: :json)
json.avatar url_for(news_post.avatar)
