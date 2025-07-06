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

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    database:'tudoList',
    password:'Brayan#16',
    entities:[Usuario,Tarea,Rol],
    synchronize:false
  }), UsuariosModule, TareasModule, AuthModule, RolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
