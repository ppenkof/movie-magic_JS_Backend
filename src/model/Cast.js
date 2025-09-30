import { Schema, model, Types } from "mongoose";

const castSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: [true, 'Cast age is required'],
        max: 120,
        min: 0
    },
    born: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    movies: [{
        type: Types.ObjectId,
        ref: 'Movie'
    }]
});

const Cast = model('Cast', castSchema);

export default Cast;