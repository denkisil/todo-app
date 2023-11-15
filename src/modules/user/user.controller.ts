import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  Req
} from "@nestjs/common";
import UserService from "./user.service";
import { ZodPipe } from "pipes/zod.pipe";
import { IUserCreateDTO, IUserDTO } from "DTO/user.dto";
import { UserCreate } from "validation/user.validation";
import { AuthGuard } from "guards/auth.guard";

@Controller("user")
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get("/me")
  async getMe(@Req() req) {
    return await this.userService.getMe(req.user.id);
  }

  @Post("/")
  async createUser(@Body(new ZodPipe(UserCreate)) newUser: IUserCreateDTO) {
    return await this.userService.createUser(newUser);
  }
}
