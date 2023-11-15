import { HttpException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { IUserAuthDTO, IUserDTO } from "DTO/user.dto";
import UserService from "modules/user/user.service";
import { compare } from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async auth(data: IUserAuthDTO): Promise<{ access_token: string }> {
    const user = await this.userService.findUserByUsername(data.username);

    const isPasswordValid = await compare(data.password, user.password);

    if (!isPasswordValid) {
      throw new HttpException("Invalid password", 400);
    }

    const payload = { username: user.username, id: user.id };

    return {
      access_token: this.jwtService.sign(payload)
    };
  }

  async verify(token: string): Promise<IUserDTO> {
    const payload = this.jwtService.verify(token);

    return await this.userService.findUserByUsername(payload.username);
  }
}
