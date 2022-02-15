import express from "express";
import { body, validationResult } from "express-validator";
import UserService from "../services/userService";

const router = express.Router();
const userService = new UserService();

interface newUserParams {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

router.post(
  "/",
  body("firstname").isString(),
  body("lastname").isString(),
  body("email").isEmail(),
  body("password").isString(),
  (req, res) => {
      const newUser: newUserParams ={
          ...req.body
      }
    const err = validationResult(req);
    if(!err.isEmpty()){
        return res.status(400).send({errors: err})
    }
    userService.addUser();
    return res.status(200).send({ success: true });
  }
);

export default router;
