import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ZodExceptionFilter } from "./errorfilters/zod.exceptionfilter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const httpAdapterHost = app.get(HttpAdapterHost);
  app.useGlobalFilters(
    new ZodExceptionFilter()
    // new AllExceptionsFilter(httpAdapterHost)
  );

  await app.listen(3000);
}
bootstrap();
