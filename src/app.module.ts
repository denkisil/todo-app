import { Module } from "@nestjs/common";

import { TodoModule } from "./modules/todo/index.module";
import UserModule from "./modules/user/index.module";
import { AuthModule } from "modules/auth/index.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [TodoModule, UserModule, AuthModule, ConfigModule.forRoot()],
  controllers: [],
  providers: []
})
export class AppModule {}
