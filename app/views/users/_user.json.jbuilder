json.extract! user, :id, :administrator, :first_name, :last_name, :email, :password, :password_digest, :position, :division, :phone, :extension, :active, :hire_date, :division_id, :avatar, :created_at, :updated_at
json.url user_url(user, format: :json)
json.avatar url_for(user.avatar)
