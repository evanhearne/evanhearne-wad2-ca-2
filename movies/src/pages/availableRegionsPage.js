import React from "react";
import { getAvailableRegions } from "../api/tmdb-api";
import PageTemplate from "../components/templateRegionListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const AvailableRegionsPage = (props) => {
    const { data, error, isLoading, isError } = useQuery(
        "regions",
        getAvailableRegions
    );
    
    if (isLoading) {
        return <Spinner />;
    }
    
    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const regions = data.results;
    
    return (
        <PageTemplate
        title="Available Regions"
        regions={regions}
        action={(region) => {
            return <></>;
        }}
        />
    );
    };
    export default AvailableRegionsPage;