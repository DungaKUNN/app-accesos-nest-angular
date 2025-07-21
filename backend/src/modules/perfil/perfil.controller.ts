import { Controller, Get, Post, Body } from '@nestjs/common';
import { perfilService } from './perfil.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';

@Controller('perfil')
export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}  

  @Get()
  findAll() {
    return this.perfilService.findAll();
  }

  @Post()
  create(@Body() createDto: CreatePerfilDto) {
    return this.perfilService.create(createDto);
  }
}
