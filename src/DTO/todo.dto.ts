export interface ITodoDTO {
  id: string;

  title: string;
  description: string;
  deadline?: Date;
  done: boolean;

  userId?: string;

  createdAt: Date;
  updatedAt: Date;
}

export interface ITodoCreateDTO
  extends Pick<ITodoDTO, "title" | "description" | "deadline" | "userId"> {}

export interface ITodoUpdateDTO extends Partial<ITodoCreateDTO> {
  done?: boolean;
}
