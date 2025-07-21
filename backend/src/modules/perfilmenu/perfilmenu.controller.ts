import { Controller, Get, Post, Body } from '@nestjs/common';
import { perfilmenuService } from './perfilmenu.service';
import { CreatePerfilmenuDto } from './dto/create-perfilmenu.dto';

@Controller('perfilmenu')
export class PerfilmenuController {
  constructor(private readonly perfilmenuService: PerfilmenuService) {}  

  @Get()
  findAll() {
    return this.perfilmenuService.findAll();
  }

  @Post()
  create(@Body() createDto: CreatePerfilmenuDto) {
    return this.perfilmenuService.create(createDto);
  }
}
