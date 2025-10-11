# movie-magic_JS_Backend
SoftUni JS Back-End Course Workshop
## Development Steps
### Setup
 - [x] Initialize Project
 - [x] Add Express Server `npm i express`
 - [x] Config debugging
 - [x] Add Workshop Resources
 - [x] Setup Handlebars `npm i express-handlebars`
 - [x] Setup static files
 - [x] Render Home Page
 - [x] Add Layout
 - [x] Render About Page
### Architecture and dynamic rendering
 - [x] Add home controller
 - [x] Add movie data layer
 - [x] Add movie service
 - [x] Render movies on home page
 - [x] Show no movies screen
### Create Movie
 - [x] Add Movie Controller
 - [x] Show create movie page
 - [x] Add routes
 - [x] Add 404 page
 - [x] Ready body data
 - [x] Create movie
   - [x] Add action
   - [x] Add service
   - [x] Add model method for creating movie
 - [x] Redirect after creation
 - [x] Add unique if for each cerated movie
### Details
 - [x] Add navigation button for detail page
 - [x] Add route with param for details page 
 - [x] GetOne movie from service
 - [x] Find movie by id from model
 - [x] Render details page with dynamic data
### Search
 - [x] Show static search page
 - [x] Render all movies
 - [x] Modify search form
 - [x] Filter movies
   - [x] By year
   - [x] By genre
   - [x] By title 
 - [x] Remember search words
### Bonuses
 - [x] Dynamic page title
 - [x] Rating (temp solution)
 - [x] File Persistance

## Workshop part 2 - MongoDB Database

### Prerequisites
 - [x] Install MongoDB Community Server
 - [x] Install Compass GUI
 - [x] Install Mongosh CLI (Optional)

### Setup DB
- [x] Install mongoose and connect to DB 'npm i mongoose'
- [x] Connect to DB

### Refactor Movies to use mongoose
- [x] Add movie model
  - [x] Create movie schema
  - [X] Movie model
- [x] Import file movies to database !DON"T Import IDs
- [x] Fix own property handlebars problem with lean method
- [x] General fix for own property problem
- [x] Refactor details
- [x] Refactor create
- [x] Refactor search

### Add cast

- [x] Add new resources
- [x] Create Cast Controller
- [x] Create Cast Page
- [x] Add Cast model
- [x] Create Cast Service
- [x] Create Cast Functionality


### Attach Cast to Movie (relation)

-[x] Add attach cast button
-[x] Add attach cast page
-[x] Add dynamic data to cast page
-[x] Show cast list attach select
-[x] Add relation between cast and movie
-[x] Attach cast functionality

### Show Cast on Details (population)

-[x] Get movie casts filtered
-[x] Show casts on details
-[x] Get movie cast using population




### Bonuses 
- [x] Filter casts if they are already attached
- [ ] Env variable
- [ ] Name in movie
- [ ] Back refference from vscode
- [ ] Add movie views to a folder

## Workshop 3 - Session and Authentication

### Initial Setup
 - [x] Add resources

### Registration
- [x] Add new controller 'authController'
- [x] Add registration page
- [x] Add User model
- [x] Add User service
- [x] Handle registration (create user in DB)
- [x] Add password hashing

### Login

- [x] Add login page
- [x] Handle login
  - [x] Validate user
  - [x] Validate password
  - [x] Create token
  - [x] Return token to client

### Logout

-[x]Add logout action
-[x] Clear cookie

### Authorization

- [x] Install auth cookie parser
- [x] Add auth middleware
- [x] Add isAuth route guard
- [x] Add isGuest route guard


## Dynamic navigation

- [x] Group navigation by user type (all, authenticated and guest)
- [x] Add auth info to handlebars context

### Show creator control buttons

 - [x] Add edit and delete buttons on details page
 - [x] Add creator as relation to movies
 - [x] Add user as creator on movie create
 - [x] Show buttons only for creators

### Delete movies

 - [x] Add delete action
 - [x] Add creator validation

### Edit movies

- [x] Add edit page
- [x] Add dynamic movie data to edit page
- [x] Handle edit movie
  
### Bonus

- [x] Automatic login on register
- [x] Edit categories
- [ ] Invalidate token on logout
- [ ] Refresh token

## Workshop 4 - Validation and Error Handling

- [x] Add resources

### Validation
- [x] Validate movie
- [x] Validate cast
- [ ] Validate user



### Bonuses 

- [ ] Dynamic year check
- [ ] Character name

