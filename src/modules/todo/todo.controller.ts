import {
  Body,
  Controller,
  Get,
  Put,
  ParseIntPipe,
  Post,
  Query,
  HttpException,
  Param,
  Delete,
  UseGuards,
  Req
} from "@nestjs/common";

import { TodoService } from "./todo.service";
import { ITodoCreateDTO, ITodoUpdateDTO } from "DTO/todo.dto";
import { TodoCreate, TodoUpdate } from "validation/todo.validation";
import { ZodPipe } from "pipes/zod.pipe";
import { AuthGuard } from "guards/auth.guard";

@UseGuards(AuthGuard)
@Controller("todo")
export class TodoController {
  constructor(public readonly todoService: TodoService) {}

  @Get("/")
  async getTodos(
    @Req() req,
    @Query("offset", new ParseIntPipe({ optional: true })) offset?: number,
    @Query("page", new ParseIntPipe({ optional: true })) page?: number
  ) {
    try {
      return await this.todoService.getTodos(offset, page, req.user.id);
    } catch (e) {
      return e;
    }
  }

  @Get("/:id")
  async getTodoById(@Req() req, @Param("id") id: string) {
    return await this.todoService.getTodo(id, req.user.id);
  }

  @Post("/")
  async createTodo(
    @Req() req,
    @Body(new ZodPipe(TodoCreate)) newTodo: ITodoCreateDTO
  ) {
    return await this.todoService.createTodo({
      userId: req.user.id,
      ...newTodo
    });
  }

  @Put("/:id")
  async updateTodo(
    @Req() req,
    @Param("id") id: string,
    @Body(new ZodPipe(TodoUpdate)) updateTodo: ITodoUpdateDTO
  ) {
    await this.todoService.updateTodo(id, req.user.id, updateTodo);
  }

  @Put("/:id/done")
  async done(@Req() req, @Param("id") id: string) {
    return await this.todoService.done(id, req.user.id);
  }

  @Delete("/:id")
  async delete(@Req() req, @Param("id") id: string) {
    return await this.todoService.deleteTodo(id, req.user.id);
  }
}
