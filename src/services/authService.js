import User from '../model/User.js';
import bcrypt from 'bcrypt';

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

        
    }

}