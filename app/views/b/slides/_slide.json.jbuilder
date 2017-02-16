json.extract! slide, :id, :title, :description, :slave, :image_uid, :image_name, :url, :sort, :created_at, :updated_at
json.url slide_url(slide, format: :json)