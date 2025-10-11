import { Schema, model} from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    email: { 
        type: String, 
        required: true,
        unique: [true, 'Email already exists'],
    },
    password: { 
        type: String, 
        required: true,
        
    },
});

userSchema.pre("save", async function() {
    //Generate sald
    // const salt = await bcrypt.genSalt(12);
    // this.password = await bcrypt.hash(this.password, salt);
    //Short syntaxis
    this.password = await bcrypt.hash(this.password, 12);
});

const User = model("User", userSchema);

export default User;