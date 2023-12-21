# Assignment 2 - Web API.

Name: Evan Hearne

## Features.

 + 3 endpoints (discover movies ,now playing movies, now airing tv shows) added.
 + Added 4 mongodb collection called blog, movie, movies, nowPlaying.
 + Added 4 new MongoDB endpoint /blog, /movie, /movies, /nowPlaying
 + Semi integrated own backend with frontend with some calls still being made from TMDB.
 + Sign in and Sign up added.

## Setup requirements.

A MongoDB instance is required to run either locally or in the cloud for the database functionality. Docker is a great way to set up a local instance. 

```
docker run -d -p 27017:27017 mongo
```

Once you have a running instance, configure the /movies-api/.env file with the following:

```
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb://localhost:27017/movies_db
TMDB_KEY= [Your API key from TMDB]
SECRET= [your own secret e.g. ilikecake]
```

Also, configure the /movies/.env file with the following:

```
REACT_APP_TMDB_KEY=[Your API key from TMDB]
FAST_REFRESH=false
```

Then, from the root folder of the repository run the following in a terminal window (you will need two)

```
cd movies-api
npm install
npm start dev
```

This runs a script initialising your database with the required data from TMDB. This is important as some API calls are made from our own database, but others are made directly to TMDB (i.e. there is a mixture of databases being used). 

Leave the window running and open another. Make sure you are again in the root directory of the repository, run the following.

```
cd movies
npm install
npm start
```

This starts our front end and should launch in a browser. If not, the endpoint is specified in the terminal window which you can use to access the front end.

## API Configuration

Please see above for steps mentioned relating to .env files.

## API Design

Semi integrated API - below lists the integrated endpoints and their request method.

- /api/movies | GET | Gets a list of movies 
- /api/movie/{movieid} | GET | Gets a single movie 
- /api/nowPlaying | GET | Gets a list of now playing movies
- /api/users | GET | Gets a list of users
- /api/users?action=register | POST | Registers user and returns a success message
- /api/users?action=authenticate | POST | Authenticates user and returns a Bearer key for JWT authentication

The rest of the endpoints are still being used from TMDB database. They are GET requests.

- TV shows - /tv
- TV show by id = /tv/:id
- Watch Provider Regions - /watch/providers/regions
- Popular actors - /person/popular
- Popular actors by id - /person/:id

## Security and Authentication

The API requires authentication to access it's endpoints. The user is required to sign up and sign in, which generates a Bearer key used to authenticate a GET request through the Authorization header. 

There are no protected routes in the Node.js app.

## Integrating with React App

I integrated my React app with the API by replacing the endpoints used previously. I took the base project from Week 12 and extended it to allow me to use the endpoints found in the API. Some endpoints are not integrated due to time constraints.

The views that use the Web API are Home, Now Playing, and within those views an individual movie view by id. 

As mentioned before a script initialises the database with the relevant information. 

See above for new features added.

## Independent learning (if relevant)

The script mentioned previously initialises the database with the data from TMDB as required by making get requests and converting this information to a default export variable in JS, which is then read in as needed using dynamic importing. This is important as files are modified within script, and importing them too early does not allow the script to run properly. Promises are used to ensure the sequence ran through asynchronous methods.  