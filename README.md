# GRAPEVINE

**Grapevine** is a blog application built using Ruby on Rails for the backend and React for the frontend.
A user can be able to see the posts in the blog, but to be able to view a single post in it's entirety they have to be logged in. A user has the ability to perform several CRUD functionalities once logged in, the user can write and publish a blog post, edit their own blog posts and even delete their own blog posts if the want to. 

A user can be able to update their profile details like their profile picture, username, email and password.
A user can also log out of the account and since they signed up, their details get stored in the database and so they can log back in with their details whenever they feel like it.

## LINK
Here is a link to a video show casing the functionalities of the application [**GRAPEVINE**](https://watch.screencastify.com/v/Osm5A8CCmkIVVnbzuN7S)

## Technology
- ReactJS
- Ruby on Rails(API)
- PostgreSQL


# Getting Started 

## Prerequisites

You need an IDE of your choice (preferably Visual Studio Code). You will need a browser (preferably Chrome) to view the webpage. You need to have installed npm and JSON-server on your local machine.

# Set up

The application interacts with its backend via a RESTful API where it allows a user to Create, Read,Update and Delete data via the methods POST, GET, PATCH/PUT and DELETE 

To see the application live in your local host, you need to clone via https or ssh. After a successful clone, you move into the project directory and run **npm install** to install the required node modules and **bundle install** to install the necessary dependencies.
Then you run the command: **rails s** to fire up the server then in another terminal run **npm start --prefix client** to open the application in the browser.
