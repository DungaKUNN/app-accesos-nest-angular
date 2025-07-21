import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Perfil } from './entities/perfil.entity';
import { CreatePerfilDto } from './dto/create-perfil.dto';

@Injectable()
export class PerfilService {
  constructor(@InjectModel(Perfil) private readonly model: typeof Perfil) {}  

  async findAll() {
    return this.model.findAll();
  }

  async create(data: CreatePerfilDto) {
    return this.model.create(data);
  }
}
