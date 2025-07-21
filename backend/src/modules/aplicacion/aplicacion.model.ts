import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Perfil } from '../../perfil/perfil.model';
import { Menu } from '../../menu/menu.model';

@Table({ tableName: 'aplicacion', timestamps: false })
export class Aplicacion extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  idaplicacion: string;

  @Column({ type: DataType.STRING })
  descripcion: string;

  @Column({ type: DataType.DATE, allowNull: false })
  fechacreacion: Date;

  @Column({ type: DataType.STRING(100), allowNull: false })
  usuariocreacion: string;

  @Column({ type: DataType.DATE })
  fechaactualizacion: Date;

  @Column({ type: DataType.STRING(100) })
  usuarioactualizacion: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: true })
  estado: boolean;

  @HasMany(() => Perfil)
  perfiles: Perfil[];

  @HasMany(() => Menu)
  menus: Menu[];
}