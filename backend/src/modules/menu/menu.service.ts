import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Menu } from './entities/menu.entity';
import { CreateMenuDto } from './dto/create-menu.dto';

@Injectable()
export class MenuService {
  constructor(@InjectModel(Menu) private readonly model: typeof Menu) {}  

  async findAll() {
    return this.model.findAll();
  }

  async create(data: CreateMenuDto) {
    return this.model.create(data);
  }
}
