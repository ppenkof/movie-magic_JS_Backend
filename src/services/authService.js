import User from '../model/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = '89cwxqwcrw9vc89wcr7cwrw6v8wvw7vv6vw8vw6623'

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

        return token;

    }

}