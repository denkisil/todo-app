import { z } from "zod";

// todo defaultsimport { z } from "zod";

// todo defaults
const todo = {
  title: z.string().min(5),
  description: z.string().min(10),
  deadline: z.date().optional(),
  done: z.boolean().optional()
};

// user defaults
const user = {
  username: z.string().min(3).max(32),
  password: z.string().min(8).max(32)
};

export { todo, user };
