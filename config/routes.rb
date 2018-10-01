Rails.application.routes.draw do

  admin_constraint = lambda do |request|
    request.env['warden'].authenticate? and request.env['warden'].user.admin?
  end

  constraints admin_constraint do
    resources :admin
  end

  devise_for :users
  root 'home#index'

end
