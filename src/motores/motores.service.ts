import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateMotorDto } from './motores.dto';
@Injectable()
export class MotoresService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateMotorDto) {
    return this.prisma.motor.create({ data });
  }

  findAll() {
    return this.prisma.motor.findMany();
  }

  findOne(id: string) {
    return this.prisma.motor.findUnique({ where: { id } });
  }

  update(id: string, data: Prisma.MotorUpdateInput) {
    return this.prisma.motor.update({ where: { id }, data });

  }

  remove(id: string) {
    return this.prisma.motor.delete({ where: { id } });
  }
}
