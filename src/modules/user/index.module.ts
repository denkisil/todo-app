import { Module } from "@nestjs/common";
import UserController from "./user.controller";
import UserService from "./user.service";
import UserModel from "database/user.model";
import { PrismaService } from "services/prisma.service";

@Module({
  controllers: [UserController],
  providers: [UserService, UserModel, PrismaService],
  exports: [UserService]
})
export default class UserModule {}
