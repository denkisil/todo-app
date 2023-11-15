import { HttpException, Injectable } from "@nestjs/common";
import { IUserCreateDTO, IUserDTO, IUserUpdateDTO } from "DTO/user.dto";
import UserModel from "database/user.model";
import { hash } from "bcrypt";

@Injectable()
export default class UserService {
  constructor(private readonly userModel: UserModel) {}

  async findUserById(id: string) {
    const user = await this.userModel.findUnique({ id });

    if (!user) {
      throw new HttpException("User not exists", 404);
    }

    return user;
  }

  async findUserByUsername(username: string) {
    const user = await this.userModel.findUnique({ username });

    if (!user) {
      throw new HttpException("User not exists", 404);
    }

    return user;
  }

  async getMe(id: string): Promise<Omit<IUserDTO, "password">> {
    const { password, ...user } = await this.findUserById(id);

    return user;
  }

  async createUser(data: IUserCreateDTO) {
    const user = await this.findUserByUsername(data.username);

    if (user) {
      throw new HttpException("User already exists", 400);
    }

    data.password = await hash(data.password, 16);

    return await this.userModel.create(data);
  }

  async updateUser(id: string, data: IUserUpdateDTO) {
    await this.findUserById(id);

    return await this.userModel.update({ id }, data);
  }

  async deleteUser(id: string) {
    await this.findUserById(id);

    return await this.userModel.delete({ id });
  }
}
