import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MotoresService } from './motores.service';
import { Prisma } from '@prisma/client';
import { CreateMotorDto } from './motores.dto';

@Controller('motores')
export class MotoresController {
  constructor(private readonly motoresServicios: MotoresService) {}

  @Post()
create(@Body() dto: CreateMotorDto) {
  return this.motoresServicios.create(dto);
}


  @Get()
  findAll() {
    return this.motoresServicios.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.motoresServicios.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Prisma.MotorUpdateInput) {
    return this.motoresServicios.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.motoresServicios.remove(id);
  }
}
