import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg';
import { getGenresTv } from '../../api/tmdb-api';
import { useQuery } from 'react-query';
import Spinner from '../spinner';

const formControl = {
    margin: 1,
    minWidth: 220,
    backgroundColor: 'rgb(255, 255, 255)'
    };

export default function FilterTvCard(props) {

    const { data, error, isLoading, isError } = useQuery('genres', getGenresTv);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const genres = data.genres;
    if (genres[0].name !== 'All'){
        genres.unshift({ id: '0', name: 'All' });
    }

    const handleChange = (e, type, value) => {
        e.preventDefault();
        props.onUserInput(type, value); // NEW
    };

    const handleTextChange = (e, props) => {
        handleChange(e, 'name', e.target.value);
    };

    const handleGenreChange = (e) => {
        handleChange(e, 'genre', e.target.value);
    };

    return (
        <Card 
            sx={{
                maxWidth: 345,
                backgroundColor: 'rgb(204, 204, 0)'
            }} 
            variant="outlined">
            <CardContent>
                <Typography 
                    sx={{ 
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: 'rgb(0, 0, 0)'
                    }} 
                    gutterBottom>
                        <SearchIcon fontSize='large' />
                    FIND YOUR FAVORITE TV SHOW
                </Typography>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="tv show"
                />
                <FormControl sx={formControl}>
                    <TextField 
                        style={{ backgroundColor: 'rgb(255, 255, 255)' }}
                        id="filled-search" 
                        label="Search by title" 
                        type="search" 
                        variant="filled"
                        onChange={handleTextChange}
                    />
                </FormControl>
                <FormControl sx={formControl}>
                    <InputLabel id="genre">Genre</InputLabel>
                    <Select
                        labelId="genre"
                        id="genre-select"
                        value={props.genreFilter}
                        onChange={ handleGenreChange }
                    >
                        {genres.map((genre) => {
                            return (
                                <MenuItem key={genre.id} value={genre.id}>
                                    {genre.name}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </CardContent>
            <CardMedia
                sx={{ height: 300 }}
                image={img}
                title="Filter"
            />
            <CardContent>
                <Typography 
                    sx={{ 
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: 'rgb(0, 0, 0)'
                    }} 
                    gutterBottom>
                        <SearchIcon fontSize='large' />
                    FIND YOUR FAVORITE TV SHOW
                </Typography>
            </CardContent>
        </Card>
    );
}