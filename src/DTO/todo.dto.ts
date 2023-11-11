export interface ITodoDTO {
  id: string;

  title: string;
  description: string;
  deadline?: Date;
  done: boolean;

  createdAt: Date;
  updatedAt: Date;
}

export interface ITodoCreateDTO {
  title: string;
  description: string;
  deadline?: string;
}

export interface ITodoUpdateDTO {
  title?: string;
  description?: string;
  deadline?: string;
  done?: boolean;
}
