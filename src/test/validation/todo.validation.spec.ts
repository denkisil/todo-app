import { TodoCreate, TodoUpdate } from "../../validation/todo.validation";

describe("Todo Validation", () => {
  describe("TodoCreate", () => {
    it("should be valid", async () => {
      const data = {
        title: "testing",
        description: "test description",
        deadline: new Date()
      };

      expect(TodoCreate.safeParse(data).success).toBe(true);
    });
  });

  describe("TodoUpdate", () => {
    it("should be valid", async () => {
      const data = {
        title: "testing",
        description: "test description",
        deadline: new Date(),
        done: true
      };

      expect(TodoUpdate.safeParse(data).success).toBe(true);
    });
  });
});
