import { Router } from 'express';

import UserController from './controllers/UserControllers';

const router = Router();
//new

router.post ("/user", UserController.createUser);
router.get ("/users", UserController.findAllUsers);
router.get ("/user/:id", UserController.findUser);
router.put ("/user/:id", UserController.updateUser);
router.delete("/user/:id", UserController.deleteUser);

export {router};