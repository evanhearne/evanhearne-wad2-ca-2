import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
    };
const chip = { margin: 0.5 };

const PopularDetails = ({ popular }) => {  // Don't miss this!
    return (
        <>
        <Typography variant="h5" component="h3">
            Overview
        </Typography>
    
        <Typography variant="h6" component="p">
            {popular.biography}
        </Typography>
    
        <Paper 
            component="ul" 
            sx={{...root}}
        >
            <li>
            <Chip label="Known For" sx={{...chip}} color="primary" />
            </li>
            <Chip label={popular.known_for_department} sx={{...chip}} />
        </Paper>
        <Paper component="ul" sx={{...root}}>
            <Chip
            icon={<StarRate />}
            label={`${popular.popularity} (${popular.known_for_department}`}
            />
            <Chip label={`Born: ${popular.birthday}`} />
            <Chip label={`Died: ${popular.deathday}`} />
        </Paper>
        </>
    );
    };

export default PopularDetails;