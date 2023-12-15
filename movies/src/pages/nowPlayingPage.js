import React from "react";
import {getNowPlaying} from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { useState } from "react";

const NowPlayingPage = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const {  data, error, isLoading, isError }  = useQuery(['now_playing'], getNowPlaying);
    
    if (isLoading) {
        return <Spinner />
    }
    
    if (isError) {
        return <h1>{error.message}</h1>
    }  
    const movies = data.results;
    
    // Redundant, but necessary to avoid app crashing.
    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    
    return (
        <PageTemplate
        title='Now Playing Movies'
        movies={movies}
        action={(movie) => {
            return null
        }}
        paginationbar={() => {
            return null
        }}
        >
        </PageTemplate>
    );
    }
export default NowPlayingPage;