Rails.application.routes.draw do
  root 'portfolios#index'

  devise_for :users, path: 'auth', path_names: { sign_in: 'sign_in', sign_out: 'sign_out' }
  devise_scope :user do
    get 'sign_in', to: 'devise/sessions#new'
    get 'sign_out', to: 'devise/sessions#destroy'
  end

  get 'account' => 'other_pages#account'

  get ':id-:contentable_type' => 'contents#show'

  put 'portfolios/:portfolio_id/project_in_portfolios' => 'project_in_portfolios#certain_portfolio_project_in_portfolios', as: :certain_portfolio_project_in_portfolios
  # put 'portfolios/:portfolio_id/project_in_portfolios' => 'project_in_portfolios#update'
  resources :project_in_portfolios

  resources :resume_in_portfolios
  resources :resumes
  resources :portfolios
  resources :projects
  resources :contents, only: [:index, :create, :update, :destroy]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
