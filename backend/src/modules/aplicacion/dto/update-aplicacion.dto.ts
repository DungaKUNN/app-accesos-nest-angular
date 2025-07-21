import { IsString, IsOptional } from 'class-validator';

export class UpdateAplicacionDto {
  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsString()
  @IsOptional()
  usuarioactualizacion?: string;

  @IsOptional()
  estado?: boolean;
}