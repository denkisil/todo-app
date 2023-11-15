import { PrismaClient } from "@prisma/client";
import UserModel from "../../../database/user.model";

describe("User Model", () => {
  const userModel = new UserModel(new PrismaClient());

  describe("create", () => {
    afterEach(async () => {
      await userModel.clear();
    });

    it("should create a user", async () => {
      const data = {
        username: "testing",
        password: "test1234"
      };

      userModel.create(data).catch((err) => {
        expect(err).toBeUndefined();
      });
    });
  });
});
