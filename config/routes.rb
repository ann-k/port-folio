Rails.application.routes.draw do
  resources :content_images
  root 'portfolios#index'

  devise_for :users, path: 'auth', path_names: { sign_in: 'sign_in', sign_out: 'sign_out' }
  devise_scope :user do
    get 'sign_in', to: 'devise/sessions#new'
    get 'auth/sign_out', to: 'devise/sessions#destroy'
  end

  # get 'account' => 'other_pages#account'
  get 'privacy' => 'other_pages#privacy'

  get 'contents/:contentable_type-:slug' => 'contents#show'
  resources :contents, only: [:create, :update, :destroy]

  put 'portfolios/:portfolio_id/project_in_portfolios' => 'project_in_portfolios#sort_project_in_portfolios', as: :sort_project_in_portfolios
  delete 'project_in_portfolios_delete' => 'project_in_portfolios#delete_project_in_portfolio'
  put 'project_in_portfolios_sort_from_project_page' => 'project_in_portfolios#sort_project_in_portfolios_from_project_page', as: :sort_project_in_portfolios_from_project_page
  resources :project_in_portfolios

  resources :resume_in_portfolios

  post 'upload_content_image' => 'content_images#upload'

  post 'copy_portfolio' => 'portfolios#copy'
  resources :portfolios

  post 'copy_resume' => 'resumes#copy'
  resources :resumes

  put 'upload_project_cover' => 'projects#upload_cover'
  resources :projects

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
