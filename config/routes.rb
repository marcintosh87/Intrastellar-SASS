Rails.application.routes.draw do
  resources :e_comments
  resources :news_comments
  resources :event_posts
  resources :news_posts
  resources :users
  resources :divisions
  resources :organizations, only: %i[ index]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/me', to: 'users#me'

  # sessions
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'

  # filters
  get '/news_date', to: 'news_posts#date'
end
