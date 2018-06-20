Rails.application.routes.draw do
  root to: "pages#home"

  %w(work about contact store pathgather kustomer personal illustration lettering rope).each do |route|
    get "/#{route}", to: "pages##{route}"
  end
end
