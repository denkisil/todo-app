import UserModel from "../../../database/user.model";
import { PrismaClient } from "@prisma/client";

describe("User Model", () => {
  const userModel = new UserModel(new PrismaClient());

  describe("find", () => {
    afterEach(async () => {
      await userModel.clear();
    });

    it("should find a user by id", async () => {
      const data = {
        username: "testing",
        password: "test1234"
      };

      const user = await userModel.create(data);

      const foundUser = await userModel.findUnique({ id: user.id });

      expect(foundUser).toBeDefined();
      expect(foundUser.id).toBe(user.id);
    });

    it("should find a user by username", async () => {
      const data = {
        username: "testing",
        password: "test1234"
      };

      const user = await userModel.create(data);

      const foundUser = await userModel.findUnique({ username: user.username });

      expect(foundUser).toBeDefined();
      expect(foundUser.username).toBe(user.username);
    });

    it("should find many users", async () => {
      const data = {
        username: "testing",
        password: "test1234"
      };

      await userModel.create(data);

      const users = await userModel.findMany(0, 10);

      expect(users).toBeDefined();
      expect(users.length).toBeGreaterThan(0);
    });
  });
});
