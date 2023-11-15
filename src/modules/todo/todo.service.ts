import { HttpException, Injectable } from "@nestjs/common";
import { ITodoCreateDTO, ITodoDTO, ITodoUpdateDTO } from "DTO/todo.dto";
import TodoModel from "database/todo.model";

@Injectable()
export class TodoService {
  constructor(private readonly todoModel: TodoModel) {}

  async getTodos(
    offset?: number,
    limit?: number,
    userId?: string
  ): Promise<ITodoDTO[]> {
    return await this.todoModel.findMany(offset, limit, { userId });
  }

  async getTodo(id: string, userId: string): Promise<ITodoDTO> {
    const todo = await this.todoModel.findUnique({ id, userId });

    if (!todo) {
      throw new HttpException("Todo not found", 404);
    }

    return todo;
  }

  async createTodo(data: ITodoCreateDTO): Promise<ITodoDTO> {
    return await this.todoModel.create(data);
  }

  async deleteTodo(id: string, userId: string) {
    const todo = await this.getTodo(id, userId);

    return await this.todoModel.delete({ id });
  }

  async updateTodo(
    id: string,
    userId: string,
    data: ITodoUpdateDTO
  ): Promise<ITodoDTO> {
    const todo = await this.getTodo(id, userId);

    return await this.todoModel.update({ id }, data);
  }

  async done(id: string, userId): Promise<ITodoDTO> {
    const todo = await this.getTodo(id, userId);

    if (todo.done) {
      throw new HttpException("Todo already done", 400);
    }

    if (todo.deadline && new Date(todo.deadline) < new Date()) {
      throw new HttpException("Todo deadline already passed", 406);
    }

    return await this.todoModel.update({ id }, { done: true });
  }
}
