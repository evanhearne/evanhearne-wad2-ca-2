import React from "react";
import { useParams } from 'react-router-dom';
import TvDetails from "../components/tvDetails/";
import PageTemplate from "../components/templateTvPage";
import { getTV } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const TVPage = (props) => {
    const { id } = useParams();
    const { data: tv, error, isLoading, isError } = useQuery(
        ["tv", { id: id }],
        getTV
    );
    
    if (isLoading) {
        return <Spinner />;
    }
    
    if (isError) {
        return <h1>{error.message}</h1>;
    }
    
    return (
        <>
        {tv ? (
            <>
            <PageTemplate tv={tv}>
                <TvDetails tv={tv} />
            </PageTemplate>
            </>
        ) : (
            <p>Waiting for tv details</p>
        )}
        </>
    );
    };

export default TVPage;