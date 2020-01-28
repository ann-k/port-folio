Rails.application.routes.draw do
  root 'portfolios#index'

  resources :contents
  resources :users
  resources :resume_in_portfolios
  resources :project_in_portfolios
  resources :resumes
  resources :portfolios
  resources :projects
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
