import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Aplicacion } from './aplicacion.model';
import { AplicacionController } from './aplicacion.controller';
import { AplicacionService } from './aplicacion.service';

@Module({
  imports: [SequelizeModule.forFeature([Aplicacion])],
  controllers: [AplicacionController],
  providers: [AplicacionService],
  exports: [AplicacionService],
})
export class AplicacionModule {}