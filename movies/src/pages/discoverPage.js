import React from "react";
import { getMovies } from "../api/tmdb-api-upcoming";
import PageTemplate from '../components/templateMovieListPage'
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";
import PaginationBar from "../components/paginationBar";
import { useState } from "react";

const DiscoverPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // caching was added previously - foresaw the future here!
  const {  data, error, isLoading, isError }  = useQuery(['discover', {page:currentPage}], getMovies);

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <PageTemplate
      title='Discover Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return <AddToMustWatchIcon color="primary" movie={movie} />
      }}
      paginationbar={() => {
        return <PaginationBar
          page={currentPage}
          totalPages={10}
          onPageChange={handlePageChange}
        />
      }}
    >
    </PageTemplate>
  );
};
export default DiscoverPage;