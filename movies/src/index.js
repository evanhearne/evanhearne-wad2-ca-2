import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import DiscoverPage from "./pages/discoverPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TVShowsPage from "./pages/tvShowsPage";
import AvailableRegionsPage from "./pages/availableRegionsPage";
import PopularPage from "./pages/popularPage";
import TVPage from "./pages/tvPage";
import PopularDetailsPage from "./pages/popularDetailsPage";
import NowPlayingPage from "./pages/nowPlayingPage";
import NowAiringPage from "./pages/nowAiringPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/movies/now_playing" element={<NowPlayingPage />} />
            <Route path="/tv/now_airing" element={<NowAiringPage />} />
            <Route path="/movies/upcoming" element={<DiscoverPage />} />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={ <Navigate to="/" /> } />
            <Route path="/tv" element={<TVShowsPage />} />
            <Route path="/tv/:id" element={<TVPage />} />
            <Route path="/regions" element={<AvailableRegionsPage />} />
            <Route path="/popular" element={<PopularPage />} />
            <Route path="/popular/:id" element={<PopularDetailsPage />} />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);