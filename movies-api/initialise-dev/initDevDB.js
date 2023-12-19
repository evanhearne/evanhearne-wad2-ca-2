import dotenv from 'dotenv';
dotenv.config();
import fetch from 'node-fetch';
import fs from 'fs';

const API_KEY = process.env.TMDB_KEY // Replace with your TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchMovies() {
    try {
        // Fetching the list of movies
        const discoverResponse = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}`);
        const discoverData = await discoverResponse.json();
        const str = `const movies = ${JSON.stringify(discoverData.results, null, 2)};\nexport default movies;`;
        fs.writeFileSync('initialise-dev/movies.js', str);

        // Extracting movie IDs
        const movieIds = discoverData.results.map(movie => movie.id);

        // Fetching details for each movie
        const movieDetails = await Promise.all(
            movieIds.map(id => 
                fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`).then(response => response.json())
            )
        );

        const str2 = `const movieDetails = ${JSON.stringify(movieDetails, null, 2)};\nexport default movieDetails;`;

        // Saving detailed movie information
        fs.writeFileSync('initialise-dev/movie.js', str2);

        console.log('Movies fetched and saved successfully.');
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

async function main() {
    if (process.env.NODE_ENV !== 'development') {
        console.log('This script is only for the development environment.');
        return;
    }

    const mongoose = await import('mongoose');
    const { default: users } = await import('./users');
    const { default: movies } = await import('./movies');
    const { default: movieDetails } = await import('./movie');
    const { default: blog } = await import('./blog');

    const { default: User } = await import('../api/users/userModel');
    const { default: Movie } = await import('../api/movies/movieModel');
    const { default: Blog } = await import('../api/blog/blogModel');
    const { default: MovieDetails } = await import('../api/movie/movieDetailsModel');

    try {
        await mongoose.default.connect(process.env.MONGO_DB);

        await User.collection.drop().catch(err => console.log('User collection not found'));
        await Movie.collection.drop().catch(err => console.log('Movie collection not found'));
        await Blog.collection.drop().catch(err => console.log('Blog collection not found'));
        await MovieDetails.collection.drop().catch(err => console.log('MovieDetails collection not found'));

        await User.create(users);
        await Movie.create(movies);
        await Blog.create(blog);
        await MovieDetails.create(movieDetails);

        console.log('Database initialised');
        console.log(`${users.length} users loaded`);
        console.log(`${movies.length} movies loaded`);
        console.log(`${blog.length} blog posts loaded`);
        console.log(`${movieDetails.length} movie details loaded`);
    } catch (error) {
        console.error('Error initializing database:', error);
    } finally {
        await mongoose.default.disconnect();
    }
}

fetchMovies().then(() => main());