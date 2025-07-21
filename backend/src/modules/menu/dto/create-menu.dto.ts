export class CreateMenuDto {
  descripcion: string;
  fechacreacion: Date;
  usuariocreacion: string;
  fechaactualizacion?: Date;
  usuarioactualizacion?: string;
  estado?: boolean;
}
