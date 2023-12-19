import asyncHandler from 'express-async-handler';
import express from 'express';

import movieDetailsModel from './movieDetailsModel';

const router = express.Router();

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieDetailsModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

export default router;