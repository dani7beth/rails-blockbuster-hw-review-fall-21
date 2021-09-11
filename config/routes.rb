Rails.application.routes.draw do

  root 'stores#index'
  #resources :controller_name
  resources :stores do
    resources :movies
  end


  # resources :doctors do
  #   resources :appointments
  # end

  # resources :parent_controller do
  #  resources :child_controller
  # end


  # resources :zoos do
  #   resources :exhibits 
  # end

  # resources :exhibits do
  #   resources :animals
  #   resources :stores
  # end

  # localhost:3000/exhibits/1/animals
  # localhost:3000/exhibits/1/stores
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
