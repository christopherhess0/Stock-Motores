import { Module } from '@nestjs/common';
import { MotoresService } from './motores.service';
import { MotoresController } from './motores.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MotoresController],
  providers: [MotoresService],
})
export class MotoresModule {}
