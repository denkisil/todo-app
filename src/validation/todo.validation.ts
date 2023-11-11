import { ITodoDTO } from "../DTO/todo.dto";
import { z } from "zod";

export const TodoCreate = z
  .object({
    title: z.string().min(5),
    description: z.string().min(10),
    deadline: z.string().datetime().optional()
  })
  .strict();

export const TodoUpdate = z.object({
  title: z.string().min(5).optional(),
  description: z.string().min(10).optional(),
  deadline: z.string().datetime().optional(),
  done: z.boolean().optional()
});

export type TodoCreate = z.infer<typeof TodoCreate>;
export type TodoUpdate = z.infer<typeof TodoUpdate>;
