import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Aplicacion } from './aplicacion.model';
import { CreateAplicacionDto, UpdateAplicacionDto } from './dto';

@Injectable()
export class AplicacionService {
  constructor(
    @InjectModel(Aplicacion)
    private aplicacionModel: typeof Aplicacion,
  ) {}

  async findAll(): Promise<Aplicacion[]> {
    return this.aplicacionModel.findAll();
  }

  async findOne(id: string): Promise<Aplicacion> {
    return this.aplicacionModel.findByPk(id);
  }

  async create(createAplicacionDto: CreateAplicacionDto): Promise<Aplicacion> {
    return this.aplicacionModel.create({
      ...createAplicacionDto,
      fechacreacion: new Date(),
    });
  }

  async update(id: string, updateAplicacionDto: UpdateAplicacionDto): Promise<[number, Aplicacion[]]> {
    return this.aplicacionModel.update(
      {
        ...updateAplicacionDto,
        fechaactualizacion: new Date(),
      },
      { where: { idaplicacion: id }, returning: true },
    );
  }

  async remove(id: string): Promise<void> {
    const aplicacion = await this.findOne(id);
    await aplicacion.destroy();
  }
}