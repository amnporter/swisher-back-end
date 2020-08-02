import { Injectable, NestMiddleware, Logger, Req, Res } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void): void {
    Logger.log(`${req.method}:: ${req.baseUrl}${req.url}`);
    next();
  }
}
