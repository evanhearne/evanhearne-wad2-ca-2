import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
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

const TVDetails = ({ tv }) => {  // Don't miss this!
    
    return (
        <>
        <Typography variant="h5" component="h3">
            Overview
        </Typography>
    
        <Typography variant="h6" component="p">
            {tv.overview}
        </Typography>
    
        <Paper 
            component="ul" 
            sx={{...root}}
        >
            <li>
            <Chip label="Genres" sx={{...chip}} color="primary" />
            </li>
            {tv.genres.map((g) => (
            <li key={g.name}>
                <Chip label={g.name} sx={{...chip}} />
            </li>
            ))}
        </Paper>
        <Paper component="ul" sx={{...root}}>
            <Chip icon={<AccessTimeIcon />} label={`${tv.episode_run_time} min.`} />
            <Chip
            icon={<StarRate />}
            label={`${tv.vote_average} (${tv.vote_count}`}
            />
            <Chip label={`Released: ${tv.first_air_date}`} />
        </Paper>
        </>
    );
    };

export default TVDetails;