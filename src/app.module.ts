import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import { LoggerMiddleware } from './shared/middleware/logger.middleware';
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, { useCreateIndex: true, useFindAndModify: false }),
    ItemsModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
