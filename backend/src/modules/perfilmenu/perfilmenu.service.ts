import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Perfilmenu } from './entities/perfilmenu.entity';
import { CreatePerfilmenuDto } from './dto/create-perfilmenu.dto';

@Injectable()
export class PerfilmenuService {
  constructor(@InjectModel(Perfilmenu) private readonly model: typeof Perfilmenu) {}  

  async findAll() {
    return this.model.findAll();
  }

  async create(data: CreatePerfilmenuDto) {
    return this.model.create(data);
  }
}
