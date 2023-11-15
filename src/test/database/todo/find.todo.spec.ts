import TodoModel from "../../../database/todo.model";
import { PrismaService } from "../../../services/prisma.service";

describe("Todo Model", () => {
  const todoModel = new TodoModel(new PrismaService());

  describe("should find many todos", () => {
    afterAll(async () => {
      await todoModel.clear();
    });

    it("should find unique todo", async () => {
      const data = {
        title: "testing",
        description: "test description"
      };

      const todo = await todoModel.create(data);

      const foundTodo = await todoModel.findUnique({ id: todo.id });

      expect(foundTodo).toBeDefined();
      expect(foundTodo.id).toBe(todo.id);
    });
  });

  it("should find a todo by name", async () => {
    const data = {
      title: "testing",
      description: "test description"
    };

    const todo = await todoModel.create(data);

    const foundTodo = await todoModel.findFirst({ title: todo.title });

    expect(foundTodo).toBeDefined();
    expect(foundTodo.title).toBe(todo.title);
  });

  it("should find many todos", async () => {
    const data = {
      title: "testing",
      description: "test description"
    };

    await todoModel.create(data);

    const todos = await todoModel.findMany(0, 10);

    expect(todos).toBeDefined();
    expect(todos.length).toBeGreaterThan(0);
  });
});
