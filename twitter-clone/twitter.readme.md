# Moo - A Twitter Clone

Backend API for Moo using Express framework (NodeJS + MySQL)


## About

### Idea

Moo is a parody of Twitter. Further information about features and DB schema requirements can be found on this discussion board :


## Setup Database

```psql
create database moodb;
create user mooadmin with password 'moopass';
grant all privileges on database moodb to mooadmin;
```

## Progress

- `auth`

  - [] `POST /auth/login` - Login into DB using (username,password) and return the JWT token to accessing the other APIs.

- `users`
  - [] `POST /users` - create the user on signup (Name, username, email, password)

  - [ ] `GET /users` - get all the users using pagination will take (page=1,limit=20) like fetching 20 request and so on...
  - [] `GET /users/@{username}` - search the user by its username
  - [] `GET /users/{userid}` - fetch the user by user_id

  - [] `PATCH /users/{userid}` - update the user fields like (name, username, password)
  - [] `PUT /users/{userid}/follow` - user to follow the user by the given user_id
  - [] `DELETE /users/{userid}/follow` 🔒 - user to unfollow the user by given user_id.
  - [ ] `GET /users/{userid}/followers` 📃 - used to get the followers of other users
  - [ ] `GET /users/{userid}/followees` 📃 -  user to get the followings of other users

- `posts`
  - [ ] `POST /posts` 🔒
    - [] simple posts - used to create the post which includes (text of 240 characters) it will create an entry in the posts table (post_id, description, user_id,created_at, updated_at)
    - /posts/{postId}/reply [] reply to a post - used to create a (reply) on that post 
    - [x] repost / quote post - 
    - [x] \#hashtags - 
    - [x] \@mentions
  - [] `DELETE /posts/{postId}` 🔒 - used to delete the post by given postId
  - [] `PUT /posts/{postid}/like` 🔒 - used to like the post by 1 corrosponding to the user 
  - [] `DELETE /posts/{postid}/like` 🔒 - used to delete/descrease the like of the post by 1 corrosponding to the user.

  - [ ] `GET /posts` 📃 - used to get the post by following filters
    - [] filter by author/user_id using pagination (page,limit)
    - [x] full-text-search on post content - by searching across all the posts.
  - [] `GET /posts/{postid}` - get the post by postId including its likes, replies

- `hashtags`
  - [x] `GET /hashtags` 📃 used to fetch the hashtags
  - [x] `GET /hashtags/{tag}/posts` 📃 - used to fetch the posts by hashtags
  - [x] `POST /hashtags` - used to create the hashtag



## Database tables
- users (user_id, name, username, email, password, created_at, updated_at)
- posts (post_id, user_id(FK),description, created_at, updated_at)
- post_likes(post_id(FK), user_id(FK))
- post_replies(reply_id, post_id(FK), user_id, reply,created_at, updated_at)

## Used things
 - JWT - JSON Web Token 
 - Pagination - how to create paginated APIs
 - middlewares - for authentication
 - routes for creating the different APIs
 - controller for creating the bussiness logic
 - services for creating the DB calls either using an ORM or by raw SQL queries
