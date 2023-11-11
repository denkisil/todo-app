import { Prisma, Todo } from "@prisma/client";
import BaseModel, { IBaseModel } from "./base.model";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../services/prisma.service";

@Injectable()
export default class TodoModel {
  constructor(public client: PrismaService) {}

  async create(data: Prisma.TodoCreateInput): Promise<Todo> {
    return await this.client.todo.create({ data });
  }

  async update(
    where: Prisma.TodoWhereUniqueInput,
    data: Prisma.TodoUpdateInput
  ): Promise<Todo> {
    return await this.client.todo.update({ where, data });
  }

  async delete(where: Prisma.TodoWhereUniqueInput): Promise<Todo> {
    return await this.client.todo.delete({ where });
  }

  async findMany(offset: number, page: number): Promise<Todo[]> {
    return await this.client.todo.findMany({
      skip: offset && page ? offset * page : 0,
      take: offset ? offset : 50
    });
  }

  async findUnique(where: Prisma.TodoWhereUniqueInput): Promise<Todo> {
    return await this.client.todo.findUnique({ where });
  }

  async findFirst(where: Prisma.TodoWhereInput): Promise<Todo> {
    return await this.client.todo.findFirst({ where });
  }

  async clear(): Promise<Prisma.BatchPayload> {
    return await this.client.todo.deleteMany({});
  }
}
