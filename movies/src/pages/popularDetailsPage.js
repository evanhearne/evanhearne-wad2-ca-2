import React from "react";
import { useParams } from 'react-router-dom';
import PopularDetails from "../components/popularDetails/";
import PageTemplate from "../components/templatePopularDetailsPage";
import { getPopularDetails } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const PopularDetailsPage = (props) => {
    const { id } = useParams();
    const { data: popular, error, isLoading, isError } = useQuery(
        ["popularDetails", { id: id }],
        getPopularDetails,
      );
    
    if (isLoading) {
        return <Spinner />;
    }
    
    if (isError) {
        return <h1>{error.message}</h1>;
    }
    
    return (
        <>
        {popular ? (
            <>
            <PageTemplate popular={popular}>
                <PopularDetails popular={popular} />
            </PageTemplate>
            </>
        ) : (
            <p>Waiting for popular details</p>
        )}
        </>
    );
    };

export default PopularDetailsPage;