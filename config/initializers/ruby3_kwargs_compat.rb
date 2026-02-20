# Rails 5.2 passes keyword args as a positional hash to middleware constructors.
# Ruby 3.0+ no longer auto-converts trailing hashes to keyword args, causing
# ArgumentError. This patch makes ActionDispatch::Static accept both calling
# conventions.
module ActionDispatch
  class Static
    def initialize(app, path, maybe_options = nil, index: "index", headers: {})
      if maybe_options.is_a?(Hash)
        index   = maybe_options.fetch(:index, index)
        headers = maybe_options.fetch(:headers, headers)
      end
      @app          = app
      @file_handler = FileHandler.new(path, index: index, headers: headers)
    end
  end
end
