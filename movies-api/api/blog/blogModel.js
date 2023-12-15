import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: { type: String },
    content: { type: String },
});

export default mongoose.model("Blog", BlogSchema);