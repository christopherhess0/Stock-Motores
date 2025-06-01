import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MotoresService } from './motores.service';
import { Prisma } from '@prisma/client';

@Controller('motores')
export class MotoresController {
  constructor(private readonly motoresService: MotoresService) {}

  @Post()
  create(@Body() data: Prisma.MotorCreateInput) {
    return this.motoresService.create(data);
  }

  @Get()
  findAll() {
    return this.motoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.motoresService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Prisma.MotorUpdateInput) {
    return this.motoresService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.motoresService.remove(id);
  }
}
