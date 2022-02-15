import { Prisma } from "@prisma/client";
import { Response } from "express";
import { BasicUserData } from "../models/userModels";
import UserRepository from "../repositories/userRepository";

export default class UserService {
  private readonly userRepository = new UserRepository();

  async addUser(res: Response, newUser: BasicUserData) {
    // Make sure email cannot be reused by changing casing
    newUser.email = newUser.email.toLowerCase();

    try {
      await this.userRepository.addUser(newUser);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        return res.status(400).send({
          errors: [
            {
              msg: "duplicate email",
              param: "email",
              location: "body",
            },
          ],
        });
      }
    }
    return res.status(200).send({ success: true });
  }
}
