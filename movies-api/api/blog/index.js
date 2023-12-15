import blogModel from './blogModel';
import asyncHandler from 'express-async-handler';
import express from 'express';

const router = express.Router();

// Get all blog posts

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        blogModel.estimatedDocumentCount(),
        blogModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}
));

// Get blog post details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const blog = await blogModel.findByBlogDBId(id);
    if (blog) {
        res.status(200).json(blog);
    } else {
        res.status(404).json({ message: 'The blog post you requested could not be found.', status_code: 404 });
    }
}));

export default router;