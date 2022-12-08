class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :photo, :user_id, :category_id, :created_at,:updated_at
  belongs_to :category
end
