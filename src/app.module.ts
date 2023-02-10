import { Module } from '@nestjs/common';
import { AppController } from './handler/controllers/app.controller';
import { AppService } from './application/services/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
