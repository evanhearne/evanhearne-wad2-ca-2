import React from "react";
import PageTemplate from "../components/templatePopularPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getPopular } from "../api/tmdb-api";

const PopularPage = () => {
    const { data, error, isLoading, isError } = useQuery(
        "popular",
        getPopular
    );
    
    if (isLoading) {
        return <Spinner />;
    }
    
    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const popular = data;
    
    return (
        <PageTemplate popular={popular} title="Popular People" />
    );
    };

export default PopularPage;