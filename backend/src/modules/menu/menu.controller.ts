import { Controller, Get, Post, Body } from '@nestjs/common';
import { menuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}  

  @Get()
  findAll() {
    return this.menuService.findAll();
  }

  @Post()
  create(@Body() createDto: CreateMenuDto) {
    return this.menuService.create(createDto);
  }
}
