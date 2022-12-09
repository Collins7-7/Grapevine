class Post < ApplicationRecord
    belongs_to :user
    belongs_to :category

    validates :title, presence: true, uniqueness: true 
    validates :description, length: {minimum: 20}
end

