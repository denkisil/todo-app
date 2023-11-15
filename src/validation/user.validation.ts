import { z } from "zod";
import { user } from "./defaults";
import { type } from "os";

const User = z.object({
  username: user.username,
  password: user.password
});

export const UserCreate = User.strict();

export const UserAuth = User.strict();

export const UserUpdate = z.object({
  username: user.username.optional()
});

export type UserCreate = z.infer<typeof UserCreate>;
export type UserAuth = z.infer<typeof UserAuth>;
export type UserUpdate = z.infer<typeof UserUpdate>;
