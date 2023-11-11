import { PrismaClient } from "@prisma/client";
import TodoModel from "../../database/todo.model";

describe("Todo Model", () => {
  const todoModel = new TodoModel(new PrismaClient());

  describe("findMany", () => {
    afterAll(async () => {
      await todoModel.clear();
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

    it("should find a document", async () => {
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
});
