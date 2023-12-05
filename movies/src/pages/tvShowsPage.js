import React from "react";
import { getTVShows } from  "../api/tmdb-api";
import TvShowsPageTemplate from "../components/templateTvShowsPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const TVShowsPage = (props) => {
    
      const {  data, error, isLoading, isError }  = useQuery('tv', getTVShows)

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
     <TvShowsPageTemplate
        name="Discover TV Shows"
        tvShows={tvShows}
     />
    );
    };
    export default TVShowsPage;