import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";

@Catch()
export class AllExceptionsFilter
  extends BaseExceptionFilter
  implements ExceptionFilter
{
  catch(exception: unknown, host: ArgumentsHost) {
    super.catch(exception, host);
  }
}
