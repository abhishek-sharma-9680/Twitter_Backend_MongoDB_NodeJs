import express from 'express';

import { createTweet,getTweet } from '../../controller/tweet-controller.js';
import {toggleLike} from '../../controller/like-controller.js'
import { createComment } from '../../controller/comment-controller.js';
import { signup,login } from '../../controller/auth-controller.js';

import{authenticate } from '../../middlewares/authenticate.js'
const router = express.Router();

router.post('/tweets', createTweet);
router.get('/tweets/:id', getTweet);

router.post('/likes/toggle',toggleLike);
router.post('/comments',authenticate,createComment);
router.post('/signup',signup);
router.post('/login',login);


export default router;

/**
 * 
 * user -> unique_id -
 * 
 * https://www.mywebsite.com/verifyEmail/skhvbv8w874rte4t
 * 
 * verifyEmail/:unique_id -> decrypttoken (unique_id) -> {id: wi4uy, email: w8ery}
 * 
 * db -> userid -> unique_id -> createdAt -> isVerified
 */