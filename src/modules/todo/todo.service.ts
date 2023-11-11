import { HttpException, Injectable } from "@nestjs/common";
import { ITodoCreateDTO, ITodoDTO, ITodoUpdateDTO } from "src/DTO/todo.dto";
import TodoModel from "src/database/todo.model";

@Injectable()
export class TodoService {
  constructor(private readonly todoModel: TodoModel) {}

  async getTodos(offset?: number, limit?: number) {
    return await this.todoModel.findMany(offset, limit);
  }

  async getTodo(id: string) {
    const todo = await this.todoModel.findUnique({ id });

    if (!todo) {
      throw new HttpException("Todo not found", 404);
    }

    return todo;
  }

  async createTodo(data: ITodoCreateDTO): Promise<ITodoDTO> {
    return await this.todoModel.create(data);
  }

  async deleteTodo(id: string) {
    const todo = await this.getTodo(id);

    return await this.todoModel.delete({ id });
  }

  async updateTodo(id: string, data: ITodoUpdateDTO): Promise<ITodoDTO> {
    const todo = await this.getTodo(id);

    return await this.todoModel.update({ id }, data);
  }

  async done(id: string): Promise<ITodoDTO> {
    const todo = await this.getTodo(id);

    if (todo.done) {
      throw new HttpException("Todo already done", 400);
    }

    if (todo.deadline && new Date(todo.deadline) < new Date()) {
      throw new HttpException("Todo deadline already passed", 406);
    }

    return await this.todoModel.update({ id }, { done: true });
  }
}
