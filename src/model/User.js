import { Schema, model} from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    email: { 
        type: String, 
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists'],
        match: [/[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/],
        minLength: [10, 'Email must be at least 10 characters long'],
    },
    password: { 
        type: String, 
        required: [true, 'Password is required'],
        minLength: [6, 'Password must be at least 6 characters long'],
        match: [/^[a-zA-Z0-9]+$/]
    },
});

//Validate password on user creation
userSchema.virtual('rePassword')
    .get(function() {
        return this._rePassword;
    })
    .set(function(value) {
        this._rePassword = value;
    });

userSchema.pre('validate', function() {
    if(this.isNew && this.password !== this.rePassword) {
        this.invalidate('rePassword', 'Passwords do not match!');
    }
});

//Validate unique email on user creation
// userSchema.pre('validate', async function() {
//     if(this.isNew){
//         const userExists = await this.constructor.exists({email: this.email});
//         if(userExists) {
//             throw new Error('Email already exists!');
//         }
//     }
// });

userSchema.pre("save", async function() {
    //Generate sald
    // const salt = await bcrypt.genSalt(12);
    // this.password = await bcrypt.hash(this.password, salt);
    //Short syntaxis
    this.password = await bcrypt.hash(this.password, 12);
});

const User = model("User", userSchema);

export default User;