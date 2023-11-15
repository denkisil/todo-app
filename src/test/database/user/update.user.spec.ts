import UserModel from "../../../database/user.model";
import { PrismaClient } from "@prisma/client";

describe("User Model", () => {
  const userModel = new UserModel(new PrismaClient());

  describe("update", () => {
    afterEach(async () => {
      await userModel.clear();
    });

    it("should update a user", async () => {
      const data = {
        username: "testing",
        password: "test1234"
      };

      const user = await userModel.create(data);

      const updatedUser = await userModel.update(
        { id: user.id },
        {
          username: "testing2"
        }
      );

      expect(updatedUser).toBeDefined();
      expect(updatedUser.username).toBe("testing2");
    });
  });
});
