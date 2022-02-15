import { PrismaClient } from "@prisma/client";
import { BasicUserData } from "../models/userModels";

export default class UserRepository{
    private readonly prisma = new PrismaClient();

    async addUser(newUser: BasicUserData){
        await this.prisma.user.create({
            data:{
                ...newUser
            }
        })
    }
}