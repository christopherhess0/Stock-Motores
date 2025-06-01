import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MotoresModule } from './motores/motores.module';

@Module({
  imports: [MotoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
