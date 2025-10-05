import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/constants.js';


export default function authMiddleware(req, res, next) {
    const token = req.cookies['auth'];
  if (!token) {
    return next();
  }

    try {
        const decodedToken = jwt.verify(token, JWT_SECRET);
        // Attach authenticated user to request
        req.user = decodedToken;
        req.isAuthenticated = true;
        next();
    }   
    catch (err) {
        console.error('Invalid token', err);
        res.clearCookie('auth');
        res.redirect('/auth/login');
    }

}