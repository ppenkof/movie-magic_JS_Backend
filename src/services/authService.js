import User from '../model/User.js';

export default {
    register(userData) {
        return User.create(userData);
    }
}