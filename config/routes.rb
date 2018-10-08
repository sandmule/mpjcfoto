Rails.application.routes.draw do
  resources :admin
  devise_for :users
  root 'home#index'

  resources :about, :design, :contact, :video, :photography

  namespace :api, defaults: { format: :json } do
    get 'photos/albums', to: 'photos#get_albums'
    get 'photos/images', to: 'photos#get_images'
    post'photos/remove_file', to: 'photos#remove_file'
    get 'uploads/presigned_url', to: 'uploads#presigned_url'
    resources :uploads
  end

  get '*path', to: 'home#index'
end
