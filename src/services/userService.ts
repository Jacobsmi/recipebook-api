import { BasicUserData } from "../models/userModels";
import UserRepository from "../repositories/userRepository";

export default class UserService {
    private readonly userRepository = new UserRepository();

    async addUser(newUser: BasicUserData){
        // Make sure email cannot be reused by changing casing
        newUser.email = newUser.email.toLowerCase();

        await this.userRepository.addUser(newUser);
    }
}