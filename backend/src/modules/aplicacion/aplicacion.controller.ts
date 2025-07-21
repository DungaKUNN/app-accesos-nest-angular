import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AplicacionService } from './aplicacion.service';
import { CreateAplicacionDto, UpdateAplicacionDto } from './dto';

@Controller('aplicaciones')
export class AplicacionController {
  constructor(private readonly aplicacionService: AplicacionService) {}

  @Get()
  findAll() {
    return this.aplicacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aplicacionService.findOne(id);
  }

  @Post()
  create(@Body() createAplicacionDto: CreateAplicacionDto) {
    return this.aplicacionService.create(createAplicacionDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAplicacionDto: UpdateAplicacionDto) {
    return this.aplicacionService.update(id, updateAplicacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aplicacionService.remove(id);
  }
}