import { PrismaClient } from "@prisma/client";
import TodoModel from "../../../database/todo.model";

describe("Todo Model", () => {
  const todoModel = new TodoModel(new PrismaClient());

  describe("update", () => {
    afterAll(async () => {
      await todoModel.clear();
    });

    it("should update a todo", async () => {
      const data = {
        title: "testing",
        description: "test description",
        deadline: new Date(),
        done: true
      };

      const todo = await todoModel.create(data);

      const updateData = {
        title: "testing",
        description: "test description",
        deadline: new Date(),
        done: false
      };

      const updatedTodo = await todoModel.update({ id: todo.id }, updateData);

      expect(updatedTodo.done).toBe(false);
    });
  });
});
