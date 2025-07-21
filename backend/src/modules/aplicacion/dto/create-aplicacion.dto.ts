import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAplicacionDto {
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  usuariocreacion: string;
}