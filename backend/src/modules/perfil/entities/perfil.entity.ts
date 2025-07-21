import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'perfil',
  timestamps: false
})
export class Perfil extends Model<Perfil> {
  @Column({ primaryKey: true, type: DataType.UUID })
  idperfil: string;

  @Column(DataType.STRING)
  descripcion: string;

  @Column(DataType.DATE)
  fechacreacion: Date;

  @Column(DataType.STRING)
  usuariocreacion: string;

  @Column(DataType.DATE)
  fechaactualizacion: Date;

  @Column(DataType.STRING)
  usuarioactualizacion: string;

  @Column(DataType.BOOLEAN)
  estado: boolean;
}
