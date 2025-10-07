import User from '../model/User.js';
import bcrypt from 'bcrypt';
import { generateAuthToken } from '../utils/tokenUtils.js'; 

export default {

    async register(userData) {
        const user = await User.create(userData);
        const token = generateAuthToken(user);

        return token;
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
        const token = generateAuthToken(user);
    }

}