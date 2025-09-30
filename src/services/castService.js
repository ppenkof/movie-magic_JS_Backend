import { create } from "express-handlebars"
import Cast from "../model/Cast"

export default {
    create(castData) {
        return Cast.create(castData);
    }
}