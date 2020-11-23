import express from 'express';
const router = express.Router();

// Controllers
const UserController = require('../controllers/user');

router.get('/', UserController.getUsers);
router.post('/', UserController.addUser);
router.delete('/:userId', UserController.deleteUser);

export default router;
