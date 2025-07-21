import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'menu',
  timestamps: false
})
export class Menu extends Model<Menu> {
  @Column({ primaryKey: true, type: DataType.UUID })
  idmenu: string;

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
