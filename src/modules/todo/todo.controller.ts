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
  Delete
} from "@nestjs/common";

import { TodoService } from "./todo.service";
import { ITodoCreateDTO, ITodoUpdateDTO } from "src/DTO/todo.dto";
import { TodoCreate, TodoUpdate } from "src/validation/todo.validation";

@Controller("todo")
export class TodoController {
  constructor(public readonly todoService: TodoService) {}

  @Get("/")
  async getTodos(
    @Query("offset", new ParseIntPipe({ optional: true })) offset?: number,
    @Query("page", new ParseIntPipe({ optional: true })) page?: number
  ) {
    try {
      return await this.todoService.getTodos(offset, page);
    } catch (e) {
      return e;
    }
  }

  @Get("/:id")
  async getTodoById(@Param("id") id: string) {
    return await this.todoService.getTodo(id);
  }

  @Post("/")
  async createTodo(@Body() newTodo: ITodoCreateDTO) {
    const data = await TodoCreate.parseAsync(newTodo);

    const todo = {
      title: data.title,
      description: data.description,
      deadline: data.deadline ? data.deadline : null
    };

    return await this.todoService.createTodo(todo);
  }

  @Put("/:id")
  async updateTodo(
    @Param("id") id: string,
    @Body() updateTodo: ITodoUpdateDTO
  ) {
    const data = await TodoUpdate.parseAsync(updateTodo);

    await this.todoService.updateTodo(id, data);
  }

  @Put("/:id/done")
  async done(@Param("id") id: string) {
    return await this.todoService.done(id);
  }

  @Delete("/:id")
  async delete(@Param("id") id: string) {
    return await this.todoService.deleteTodo(id);
  }
}
