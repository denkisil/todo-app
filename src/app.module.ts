import { Module } from "@nestjs/common";

import { TodoModule } from "./modules/todo/index.module";
import { PrismaService } from "./services/prisma.service";

@Module({
  imports: [TodoModule],
  controllers: [],
  providers: [PrismaService]
})
export class AppModule {}
