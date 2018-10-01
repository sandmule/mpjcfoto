Rails.application.routes.draw do

  resources :admin
  devise_for :users
  root 'home#index'

  resources :about, :design, :contact, :video, :photography
end
