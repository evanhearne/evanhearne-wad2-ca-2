import React, { useState } from "react";
import Header from "../headerRegionList";
import RegionList from "../regionList";
import Grid from "@mui/material/Grid";

function RegionListPageTemplate({ regions, title, action }) {
    const [nameFilter, setNameFilter] = useState("");
    
    let displayedRegions = regions
        .filter((m) => {
        return m.english_name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
        });

    
    return (
        <Grid container sx={{ padding: '20px' }}>
        <Grid item xs={12}>
            <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
            <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
            </Grid>
            <RegionList action={action} regions={displayedRegions}></RegionList>
        </Grid>
        </Grid>
    );
    }
    export default RegionListPageTemplate;