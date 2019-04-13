Rails.application.routes.draw do
  root to: "pages#home"

  %w(work about contact pathgather kustomer personal illustrations lettering rope).each do |route|
    get "/#{route}", to: "pages##{route}"
  end

  get '/.well-known/acme-challenge/7QeuICG1w1jAIfYnq_xdC2mhRFKtpIhywiUNLa7UXbo', to: 'pages#acme_challenge'
  get '/.well-known/acme-challenge/x25Fq5t1F3d2tBAjl0W7JYbHM8neTVWsTDs4aNPhVM0', to: 'pages#acme_challenge2'
end
