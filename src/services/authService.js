import User from '../model/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/constants.js';


export default {

    register(userData) {
        return User.create(userData);
    },

   async login(email, password) {
        const user = await User.findOne({email});

        if(!user) {
            throw new Error('Invalid email or password!');
        }

        const isValid = await bcrypt.compare(password, user.password);

        if(!isValid) {
            throw new Error('Invalid email or password!');
        }

        // Create token
        const payload = {
            id: user.id,
            email: user.email
        };

        const token = jwt.sign(payload, JWT_SECRET, {expiresIn: '2h'});
console.log(token);
        return token;

    }

}