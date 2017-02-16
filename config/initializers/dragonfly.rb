require 'dragonfly'

# Configure
Dragonfly.app.configure do
  plugin :imagemagick

  secret "7c4a1c044c631ebbfcbd2b5437e5989a3647513e05c0a6b6d3a5add6875b4a6b"

  url_format "/media/:job/:name"

  datastore :file,
    root_path: Rails.root.join('public/system/dragonfly', Rails.env),
    server_root: Rails.root.join('public')
end

# Logger
Dragonfly.logger = Rails.logger

# Mount as middleware
Rails.application.middleware.use Dragonfly::Middleware

# Add model functionality
if defined?(ActiveRecord::Base)
  ActiveRecord::Base.extend Dragonfly::Model
  ActiveRecord::Base.extend Dragonfly::Model::Validations
end
