import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import img from '../../images/film-poster-placeholder.png'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function popularCard({ popular }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={popular.name}
      />
      <CardMedia
        component="img"
        height="450"
        image={
          popular.profile_path
            ? `https://image.tmdb.org/t/p/w500${popular.profile_path}`
            : img
        }
        alt={popular.title}
      />
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`/popular/${popular.id}`}>
            <p>Details</p>
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}