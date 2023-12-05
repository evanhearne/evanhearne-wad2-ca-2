import {Link} from 'react-router-dom'
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CalendarIcon from '@mui/icons-material/CalendarTodayTwoTone';
import StarRateIcon from '@mui/icons-material/StarRate';
import Grid from '@mui/material/Grid';
import img from '../../images/film-poster-placeholder.png'
import React from "react";

export default function TvCard({ tv }) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
      // Added the additional part that I am not required to tackle from Week 7 Lab Exercise - tackled it anyways :D 
        title={
          <Typography variant="h5" component="p">
            {tv.name}{" "}
          </Typography>
        }
        />
        <CardMedia
            sx={{ height: 500 }}
            image={
                tv.poster_path
                ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}`
                : img
            }
            alt={tv.name}
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <CalendarIcon /> {tv.first_air_date}
                    </Grid>
                    <Grid item xs={6}>
                        <StarRateIcon /> {tv.vote_average}
                    </Grid>
                </Grid>
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <Link to={`/tv/${tv.id}`}>
                <Button size="small" color="primary">
                    Details
                </Button>
            </Link>
        </CardActions>
    </Card>
    );
}
