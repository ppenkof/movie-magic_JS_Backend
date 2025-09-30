import { create } from "express-handlebars"
import Cast from "../model/Cast.js"

export default {
    getAll(){
        return Cast.find();
    },
    create(castData) {
        return Cast.create(castData);
    }
}