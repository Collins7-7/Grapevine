puts "seeding user"

User.create(username: "Collo", email: "Collins@gmail.com", password_digest: "123", profile_pic: "https://images.unsplash.com/photo-1606459431839-90b942dc3754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")

User.create(username: "Sam", email: "Sam@gmail.com", password_digest: "123", profile_pic: "https://images.unsplash.com/photo-1578758803946-2c4f6738df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")

User.create(username: "Grace", email: "Grace@gmail.com", password_digest: "123", profile_pic: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")

puts "seeding categories"

Category.create(name: "Life")
Category.create(name: "Sport")
Category.create(name: "Tech")
Category.create(name: "Movie")
Category.create(name: "Music")
Category.create(name:"Fashion")

puts "seeding posts"

Post.create(title: "Top Rated", description:"James Bond is a fictional character created by British novelist Ian Fleming in 1953. A British secret agent working for MI6 under the codename 007, Bond has been portrayed on film in twenty-seven productions by actors Sean Connery, David Niven, George Lazenby, Roger Moore, Timothy Dalton, Pierce Brosnan, and Daniel Craig. Eon Productions, which now holds the adaptation rights to all of Fleming's Bond novels, made all but two films in the film series...", photo:"https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80", user_id: 1, category_id: 4)

Post.create(title: "Adele", description:"Adele Laurie Blue Adkins MBE, professionally known by the mononym Adele, is an English singer and songwriter. After graduating in arts from the BRIT School in 2006, Adele signed...", photo:"https://images.unsplash.com/photo-1635491512913-bd473a066d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80", user_id: 2, category_id: 5)

Post.create(title: "Latest On Fashion", description:"Clothing retailers such as Express and Gap that stashed away mountains of unsold basics during the coronavirus pandemic now are slashing prices on clearance merchandise in a last-ditch effort to clear clothing...", photo:"https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80", user_id: 3, category_id: 6)


Post.create(title: "Drinks", description:"If you live in Kenya, then you have interacted or heard of Gilbey's Gin. Gilbey's gin popularity has risen significantly in the last few months to make it to this list of the most popular drinks in Kenya. This could be articulated to the closing of clubs, hence people have resorted to drinking at home and some publicity. 
Gilbey's is a distilled London Dry Gin Founded In 1872 it contains juniper berries as an ingredient and is clear in colour. It can be taken neat or in... ", photo:"https://images.unsplash.com/photo-1481671703460-040cb8a2d909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", user_id: 2, category_id: 1)

Post.create(title: "Qatar World Cup", description:"The 22nd FIFA World Cup is taking place in Qatar from 20 November to 18 December 2022; it is the first World Cup to be held in the Arab world and Muslim world, and the second held entirely in Asia after the 2002 tournament in South Korea and Japan.[A] France are the defending champions, having defeated Croatia 4-2 in the 2018 final. At an estimated cost of over $220 billion,[2] it is the most expensive World Cup ever held; this figure is disputed by Qatari officials...", photo:"https://images.unsplash.com/photo-1637203727318-fb31b63e2377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", user_id: 2, category_id: 2)

Post.create(title: "Ferrari", description:"Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded by Enzo Ferrari in 1939 from the Alfa Romeo racing division as Auto Avio Costruzioni, the company built its first car in 1940, and produced its first Ferrari-badged car ...", photo:"https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&op&w=870&q=80", user_id: 1, category_id: 1)
