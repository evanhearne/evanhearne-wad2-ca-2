import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

import users from './users';
import movies from './movies';
import blog from './blog';

import User from '../api/users/userModel';
import Movie from '../api/movies/movieModel';
import Blog from '../api/blog/blogModel';

async function main() {
    if (process.env.NODE_ENV !== 'development') {
        console.log('This script is only for the development environment.');
        return;
    }
    await mongoose.connect(process.env.MONGO_DB);
    // Drop collections
    await User.collection.drop().catch(err => console.log('User collection not found'));
    await Movie.collection.drop().catch(err => console.log('Movie collection not found'));
    await Blog.collection.drop().catch(err => console.log('Blog collection not found'));
    await User.create(users);
    await Movie.create(movies);
    await Blog.create(blog);
    console.log('Database initialised');
    console.log(`${users.length} users loaded`);
    console.log(`${movies.length} movies loaded`);
    console.log(`${blog.length} blog posts loaded`);
    await mongoose.disconnect();
}

main();
