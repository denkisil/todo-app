import { Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { PrismaService } from "services/prisma.service";

@Injectable()
export default class UserModel {
  constructor(public client: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return await this.client.user.create({ data });
  }

  async update(
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput
  ): Promise<User> {
    return await this.client.user.update({ where, data });
  }

  async delete(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return await this.client.user.delete({ where });
  }

  async findMany(
    offset: number,
    page: number,
    where?: Prisma.UserWhereInput
  ): Promise<User[]> {
    return await this.client.user.findMany({
      where: where ? where : {},
      skip: offset && page ? offset * page : 0,
      take: offset ? offset : 50
    });
  }

  async findUnique(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return await this.client.user.findUnique({ where });
  }

  async findFirst(where: Prisma.UserWhereInput): Promise<User> {
    return await this.client.user.findFirst({ where });
  }

  async clear(): Promise<void> {
    await this.client.user.deleteMany({});
  }
}
