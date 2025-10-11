import { Schema, model, Types } from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Movie title is required'],
        unique: true,
        minlength: [5, 'Title is too short'],
        match: [/^[a-zA-Z0-9 ]$/, 'Title has some invalid characters'],
    },
    category: {
        type: String,
        enum: {
            values: ['tv-show', 'animation', 'movie', 'documentary', 'short-film'],
            message: 'Your category is invalid'
        },
        required: [true, 'Movie category is required'],
    },
    genre:{
        type: String,
        required: [true, 'Movie genre is required'],
        minlength: [5, 'Genre is too short'],
        match: [/^[a-zA-Z0-9 ]$/, 'Genre has some invalid characters'],
    },
    director: {
        type: String,
        required: [true, 'Movie director is required'],
        minlength: [5, 'Director name is too short'],
        match: [/^[a-zA-Z0-9 ]$/, 'Director name has some invalid characters'],
    },
    year: {
        type: Number,
        required: [true, 'Movie year is required'],
        min: [1900, 'Year must be after 1900'],
        max: [2024, 'Movie year cannot be greater than 2024'] //[new Date().getFullYear(), 'Year cannot be in the future'] //- dynamic year check
    },
    imageUrl: {
        type: String,
        required: [true, 'Movie image URL is required'],
        match: [/^https?:\/\//, 'Image URL must start with http:// or https://']
    },   
    rating: {
        type: Number,
        required: [true, 'Movie rating is required'],
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating cannot be greater than 10']
    },
    description: {
        type: String,
        required: [true, 'Movie description is required'],
        minlength: [20, 'Description must be at least 20 characters long']
    },
    casts: [{
        type: Types.ObjectId,
        ref: 'Cast'
    }],
    creator: {
        type: Types.ObjectId,
        ref: 'User',
        required: [true, 'Movie creator is required']
    }
});

const Movie = model('Movie', movieSchema);

export default Movie;