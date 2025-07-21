export class CreatePerfilDto {
  descripcion: string;
  fechacreacion: Date;
  usuariocreacion: string;
  fechaactualizacion?: Date;
  usuarioactualizacion?: string;
  estado?: boolean;
}
