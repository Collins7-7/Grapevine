puts "seeding user"

User.create(username: "Collo", email: "Collins@gmail.com", password_digest: 55412, profile_pic: "https://images.unsplash.com/photo-1606459431839-90b942dc3754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")

User.create(username: "Sam", email: "Sam@gmail.com", password_digest: 554542, profile_pic: "https://images.unsplash.com/photo-1578758803946-2c4f6738df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")

User.create(username: "Grace", email: "Grace@gmail.com", password_digest: 58851, profile_pic: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")

puts "seeding categories"

Category.create(name: "Life")
Category.create(name: "Music")
Category.create(name: "Fashion")
Category.create(name: "Sport")

puts "seeding posts"

Post.create(title: "The Incredibles", description:"Some words that should be more than 20 words", photo:"https://images.unsplash.com/photo-1559107503-521c2b36b98d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", user_id: 1, category_id: 1)

Post.create(title: "Tomatoes", description:"Some words that should be more than 20 words", photo:"https://images.unsplash.com/photo-1582284540020-8acbe03f4924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80", user_id: 2, category_id: 2)

Post.create(title: "Mangoes", description:"Mangoes are good and healthy for you", photo: "https://images.unsplash.com/photo-1606448423038-3de11e152e0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", user_id: 3, category_id: 3)


Post.create(title: "Drinks", description:"Some words that should be more than 20 words", photo:"https://images.unsplash.com/photo-1481671703460-040cb8a2d909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", user_id: 1, category_id: 1)

Post.create(title: "World Cup", description:"Some words that should be more than 20 words", photo:"https://images.unsplash.com/photo-1637203727318-fb31b63e2377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", user_id: 2, category_id: 4)

Post.create(title: "Givenchy", description:"Some words that should be more than 20 words", photo:"https://images.unsplash.com/photo-1590156352256-39e4c6eba54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", user_id: 3, category_id: 3)
