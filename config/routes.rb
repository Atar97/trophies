Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resource :session, only: [:create, :destroy], defaults: {format: :json}
  resources :users, except: [:edit, :new, :index], defaults: {format: :json}

  root to: 'static_pages#root'
end
