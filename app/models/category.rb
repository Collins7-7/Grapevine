class Category < ApplicationRecord
    has_many :posts
    has_many :users, through: :posts 

    CATEGORIES = ["Life", "Sport", "Tech", "Movie", "Music", "Fashion"] 


    validates :name, inclusion: { in: CATEGORIES,
        message: "must be one of: #{CATEGORIES.join(', ')}"
      }  

   


end
