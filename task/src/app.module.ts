// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TareasModule } from './tareas/tareas.module';
import { AuthModule } from './auth/auth.module';
import { Usuario } from './usuarios/entities/usuario.entity';
import { Tarea } from './tareas/entities/tarea.entity';
import { RolModule } from './rol/rol.module';
import { Rol } from './rol/entities/rol.entities';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('BD_HOST'),
        port: configService.get<number>('BD_PORT'),
        username: configService.get<string>('BD_USER'),
        password: configService.get<string>('BD_PASSWORD'),
        database: configService.get<string>('BD_NAME'),
        entities: [Usuario, Tarea, Rol],
        synchronize: false,
      }),
    }),
    UsuariosModule,
    TareasModule,
    AuthModule,
    RolModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
