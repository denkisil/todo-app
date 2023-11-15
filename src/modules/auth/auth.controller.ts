import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ZodPipe } from "pipes/zod.pipe";
import { UserAuth } from "validation/user.validation";
import { IUserAuthDTO } from "DTO/user.dto";

@Controller("auth")
export class AuthController {
  constructor(public readonly authService: AuthService) {}

  @Post("/")
  async auth(@Body(new ZodPipe(UserAuth)) user: IUserAuthDTO) {
    return await this.authService.auth(user);
  }
}
