import { Module } from "@nestjs/common";

import { TodoController } from "./todo.controller";
import { TodoService } from "./todo.service";
import TodoModel from "src/database/todo.model";
import { PrismaService } from "src/services/prisma.service";

@Module({
  controllers: [TodoController],
  providers: [TodoService, TodoModel, PrismaService]
})
export class TodoModule {}
