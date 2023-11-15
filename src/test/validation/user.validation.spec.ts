import { UserCreate, UserUpdate } from "../../validation/user.validation";

describe("User Validation", () => {
  describe("UserCreate & UserCreate", () => {
    it("should be valid", async () => {
      const user = {
        username: "testing",
        password: "test1234"
      };

      expect(UserCreate.safeParse(user).success).toBe(true);
    });
  });

  describe("UserUpdate", () => {
    it("should be valid", async () => {
      const data = {
        username: "John Doe"
      };

      expect(UserUpdate.safeParse(data).success).toBe(true);
    });
  });
});
