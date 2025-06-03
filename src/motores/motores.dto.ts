import { IsString, IsInt, IsNumber, IsOptional } from 'class-validator';

export class CreateMotorDto {
  @IsString()
  marca: string;

  @IsString()
  vehiculo: string;

  @IsNumber()
  cilindrada: number;

  @IsInt()
  valvulas: number;

  @IsInt()
  modelo: number;

  @IsString()
  combustible: string;

  @IsOptional()
  @IsString()
  fotoUrl?: string;
}
