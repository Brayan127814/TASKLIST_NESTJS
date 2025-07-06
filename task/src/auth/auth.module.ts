import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwr.strategy';

@Module({
  imports: [
    UsuariosModule,
    JwtModule.register({
      global:true,
      secret: "Brayan#16",
      signOptions: { expiresIn: "1h" }

    })
  ],

  controllers: [AuthController],
  providers: [AuthService,JwtStrategy],
  exports:[AuthService]
})
export class AuthModule { }
