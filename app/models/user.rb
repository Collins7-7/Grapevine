class User < ApplicationRecord

    has_secure_password

    has_many :posts
    has_many :categories, through: :posts

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
    validates :profile_pic, presence: false
end
