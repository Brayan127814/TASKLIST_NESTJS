import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/loginDto';

import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        const { usuario, password } = loginDto
        return this.authService.validator(usuario, password)
    }
}
