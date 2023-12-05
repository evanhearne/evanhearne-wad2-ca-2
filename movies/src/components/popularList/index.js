import React from 'react';
import Popular from '../popularCard';
import Grid from '@mui/material/Grid';

const PopularList = ({ popular, action }) => {
    let popularCards = popular.results.map((p) => (
        <Grid key={p.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Popular key={p.id} popular={p} action={action} />
        </Grid>
    ));
    return popularCards;
}

export default PopularList;