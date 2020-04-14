Rails.application.routes.draw do
  root 'portfolios#index'

  devise_for :users, path: 'auth', path_names: { sign_in: 'sign_in', sign_out: 'sign_out' }
  devise_scope :user do
    get 'sign_in', to: 'devise/sessions#new'
    get 'sign_out', to: 'devise/sessions#destroy'
  end

  get 'account' => 'other_pages#account'

  # get 'username/project/randomnumber' => 'contents#show'
  get 'contents/:contentable_type-:id' => 'contents#show'

  resources :resume_in_portfolios
  resources :project_in_portfolios
  resources :resumes
  resources :portfolios
  resources :projects
  resources :contents, only: [:index, :update]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
