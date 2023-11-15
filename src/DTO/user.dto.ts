export interface IUserDTO {
  id: string;
  username: string;
  password: string;

  createdAt: Date;
  updatedAt: Date;
}

export interface IUserCreateDTO
  extends Pick<IUserDTO, "username" | "password"> {}

export interface IUserUpdateDTO
  extends Pick<Partial<IUserCreateDTO>, "username"> {}

export interface IUserAuthDTO extends IUserCreateDTO {}
