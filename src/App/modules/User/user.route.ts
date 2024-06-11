import express from 'express';
const router = express.Router();

// all the auth routes here
router.post('/signup');
router.post('/login');

export const UserRoutes = router;
