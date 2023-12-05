import React from 'react';
import Region from '../regionCard';
import Grid from '@mui/material/Grid';

const RegionList = ({ regions, action }) => {
    let regionCards = regions.map((r) => (
        <Grid key={r.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Region key={r.id} region={r} action={action} />
        </Grid>
    ));
    return regionCards;
}

export default RegionList;