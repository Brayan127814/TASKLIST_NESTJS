import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from 'src/usuarios/usuarios.service';

import * as bcrypt from 'bcryptjs'


@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UsuariosService
    ) { }

    async validator(usuario: string, password: string) {
        const user = await this.userService.userEmail(usuario)
        if (!user) {
            throw new NotFoundException()
        }
        //Comparar contraseñas

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) { throw new NotFoundException() }

        //crear payload

        const payload = { sub: user.id, usuario: user.usuario, rol: user.rol.roleName }

        //Crear el token

        const token = this.jwtService.sign(payload)

        return {
            message: 'Login exitoso',
            success: true,
            token: token
        }

    }

}
