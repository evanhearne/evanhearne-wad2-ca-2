import React, {useState} from "react";
import HeaderTv from "../headerTvList";
import TvList from "../tvList";
import FilterTvCard from "../filterTvCard";
import Grid from "@mui/material/Grid";

function TvShowsPageTemplate({ tvShows, name, action }) {
    const [nameFilter, setNameFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("0");
    const genreId = Number(genreFilter);
    
    let displayedShows = tvShows
        .filter((s) => {
        return s.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
        })
        .filter((s) => {
        return genreId > 0 ? s.genre_ids.includes(genreId) : true;
        });
    
    const handleChange = (type, value) => {
        if (type === "name") setNameFilter(value);
        else setGenreFilter(value);
    };
    
    return (
        <Grid container sx={{ padding: '20px' }}>
        <Grid item xs={12}>
            <HeaderTv title={name} />
        </Grid>
        <Grid item container spacing={5}>
            <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
            <FilterTvCard
                onUserInput={handleChange}
                titleFilter={nameFilter}
                genreFilter={genreFilter}
            />
            </Grid>
            <TvList tvs={displayedShows} action={action} />
        </Grid>
        </Grid>
    );
}
export default TvShowsPageTemplate;