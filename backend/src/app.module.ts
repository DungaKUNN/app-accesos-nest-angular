import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { AplicacionModule } from './modules/aplicacion/aplicacion.module';
import { PerfilModule } from './modules/perfil/perfil.module';
import { MenuModule } from './modules/menu/menu.module';
import { PerfilmenuModule } from './modules/perfilmenu/perfilmenu.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: false,
    }),
    AplicacionModule,
    PerfilModule,
    MenuModule,
    PerfilmenuModule,
  ],
})
export class AppModule {}