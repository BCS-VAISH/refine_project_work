import express from 'express';

import {
    createUser,
    getAllusers,
    getUserInfoById
} from "../controllers/user.controller.js";


const router = express.Router();

router.route('/').get(getAllusers);
router.route('/').post(createUser);
router.route('/:id').get(getUserInfoById);

export default router;