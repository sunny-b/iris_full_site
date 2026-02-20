class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # Force HTML format before ActionView::Rendering#process_action captures
  # request.formats for with_formats(). Rails 5 + Ruby 3.x sends */* which
  # breaks template lookup when no Accept header is provided.
  def process_action(*args)
    request.format = :html unless request.format.html?
    super
  end
end
