import TodoModel from "../../database/todo.model";
import { PrismaClient } from "@prisma/client";

describe("Todo Model", () => {
  const todoModel = new TodoModel(new PrismaClient());

  describe("create", () => {
    afterAll(async () => {
      await todoModel.clear();
    });

    it("should create a todo", async () => {
      const data = {
        title: "testing",
        description: "test description"
      };

      todoModel.create(data).catch((err) => {
        expect(err).toBeUndefined();
      });
    });
  });
});
