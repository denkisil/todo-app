import { TodoCreate, TodoUpdate } from "../../validation/todo.validation";

describe("Todo Validation", () => {
  describe("TodoCreate", () => {
    it("should be valid", async () => {
      const data = {
        title: "testing",
        description: "test description",
        deadline: new Date().toISOString()
      };

      expect(TodoCreate.safeParse(data).success).toBe(true);
    });

    it("should be invalid", async () => {
      const data = {
        title: "test",
        description: "test description"
      };

      expect(TodoCreate.safeParse(data).success).toBe(false);
    });
  });

  describe("TodoUpdate", () => {
    it("should be valid", async () => {
      const data = {
        title: "testing",
        description: "test description",
        deadline: new Date().toISOString(),
        done: true
      };

      expect(TodoUpdate.safeParse(data).success).toBe(true);
    });

    it("should be invalid", async () => {
      const data = {
        title: "test",
        description: "test description",
        deadline: new Date(),
        done: "true"
      };

      expect(TodoUpdate.safeParse(data).success).toBe(false);
    });
  });
});
