import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PrismaService } from "../services/prisma.service";

export interface IBaseModel {
  client: PrismaClient;

  create?();
  update?();
  delete?();
  findMany?(offset: number, page: number);
  findUnique?();
  findFirst?();
  clear?();
}

export default class BaseModel implements IBaseModel {
  constructor(public client: PrismaService) {}
}
