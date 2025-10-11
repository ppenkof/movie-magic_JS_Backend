import { Schema, model, Types } from "mongoose";

const castSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Cast name is required!'],
        minlength: [5, 'Name is too short'],
        match: [/^[a-zA-Z0-9 ]$+/, 'Name has some invalid characters!'],
    },
    age: {
        type: Number,
        required: [true, 'Cast age is required'],
        max: [120, 'Age cannot be greater than 120'],
        min: [0, 'Age cannot be less than 0']
    },
    born: {
        type: String,
        required: [true, 'Born location is required!'],
        minlength: [10, 'Born location should be at least 10 characters long'],
        match: [/^[a-zA-Z0-9 ]$+/, 'Born location has some invalid characters!'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required'],
        match: [/^https?:\/\//, 'Image URL must start with http:// or https://']
    },
    movies: [{
        type: Types.ObjectId,
        ref: 'Movie'
    }]
});

const Cast = model('Cast', castSchema);

export default Cast;