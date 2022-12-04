class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :photo, :user_id, :categories
end
