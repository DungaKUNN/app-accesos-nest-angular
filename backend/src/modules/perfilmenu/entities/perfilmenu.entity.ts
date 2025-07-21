import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'perfilmenu',
  timestamps: false
})
export class Perfilmenu extends Model<Perfilmenu> {
  @Column({ primaryKey: true, type: DataType.UUID })
  idperfilmenu: string;

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
