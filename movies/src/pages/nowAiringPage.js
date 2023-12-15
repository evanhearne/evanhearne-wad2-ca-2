import React from "react";
import { getNowAiring } from "../api/tmdb-api";
import PageTemplate from "../components/templateTvShowsPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { useState } from "react";

const NowAiringPage = (props) => {
    const {  data, error, isLoading, isError }  = useQuery(['now_airing'], getNowAiring);
    
    if (isLoading) {
        return <Spinner />
    }
    
    if (isError) {
        return <h1>{error.message}</h1>
    }  
    const tvShows = data.results;
    
    // Redundant, but necessary to avoid app crashing.
    const favorites = tvShows.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    
    return (
        <PageTemplate
        title='Now Airing TV Shows'
        tvShows={tvShows}
        >
        </PageTemplate>
    );
    }
export default NowAiringPage;