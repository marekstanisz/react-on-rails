Rails.application.routes.draw do
  root 'welcome#index'
  get 'welcome/index'

  get 'api/comments', to: 'comments#index'
  post 'api/comments', to: 'comments#create'
end
