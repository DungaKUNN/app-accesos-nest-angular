import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'aplicacion',
  timestamps: false
})
export class Aplicacion extends Model<Aplicacion> {
  @Column({ primaryKey: true, type: DataType.UUID })
  idaplicacion: string;

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
