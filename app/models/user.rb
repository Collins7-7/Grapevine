class User < ApplicationRecord

    has_secure_password

    has_many :posts
    has_many :categories, through: :posts

    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
   
end
