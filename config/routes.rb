Rails.application.routes.draw do
  resources :events_comments
  resources :news_comments
  resources :event_posts
  resources :news_posts
  resources :users
  resources :divisions
  resources :organizations

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/me', to: 'users#me'
end
