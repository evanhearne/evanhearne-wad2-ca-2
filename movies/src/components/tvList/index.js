import React from "react";
import TvCard from "../tvCard";
import Grid from "@mui/material/Grid";

const TvList = ({ tvs, action }) => {
    let tvCards = tvs.map((t) => (
        <Grid key={t.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
        <TvCard key={t.id} tv={t} action={action} />
        </Grid>
    ));
    return tvCards;
    };
export default TvList;