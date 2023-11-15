import { todo } from "./defaults/";
import { z } from "zod";

export const TodoCreate = z
  .object({
    ...todo
  })
  .strict();

export const TodoUpdate = z.object({
  title: todo.title.optional(),
  description: todo.description.optional(),
  deadline: todo.deadline,
  done: todo.done.optional()
});

export type TodoCreate = z.infer<typeof TodoCreate>;
export type TodoUpdate = z.infer<typeof TodoUpdate>;
