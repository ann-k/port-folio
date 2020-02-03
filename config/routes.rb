Rails.application.routes.draw do
  devise_for :users, path: 'auth', path_names: { sign_in: 'sign in', sign_out: 'sign out' }
  devise_scope :user do
    get 'sign_in', to: 'devise/sessions#new'
    get 'sign_out', to: 'devise/sessions#destroy'
  end
  
  root 'portfolios#index'

  resources :contents
  resources :resume_in_portfolios
  resources :project_in_portfolios
  resources :resumes
  resources :portfolios
  resources :projects
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
