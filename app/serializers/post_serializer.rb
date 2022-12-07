class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :photo, :user_id, :category_id
end
