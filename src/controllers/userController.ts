import express, { Response } from "express";
import { body, matchedData, validationResult } from "express-validator";
import { BasicUserData } from "../models/userModels";
import UserService from "../services/userService";

const router = express.Router();
const userService = new UserService();

router.post(
  "/",
  body("firstname").isString(),
  body("lastname").isString(),
  body("email").isEmail(),
  body("password").isString(),
  async (req, res: Response) => {
    const err = validationResult(req);

    if (!err.isEmpty()) {
      return res.status(400).send({ errors: err });
    }
    
    const reqData = matchedData(req, {
      locations: ["body"],
      includeOptionals: true,
    });
    const newUser = reqData as BasicUserData;
    
    return await userService.addUser(res, newUser);
  }
);

export default router;
