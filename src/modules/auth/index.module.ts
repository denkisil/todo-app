import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import UserModule from "modules/user/index.module";
import { AuthService } from "modules/auth/auth.service";
import { AuthController } from "./auth.controller";

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: "1d" }
    })
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
