import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('SECRETKEY') || 'default_secret',
    });
  }

  async validate(payload: any) {
    return {
      id: payload.sub,
      usuario: payload.usuario,
      rol: payload.rol,
    };
  }
}


// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//     constructor() {
//         super(
//             {
//                 jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//                 ignoreExpiration: false,
//                 secretOrKey: 'Brayan#16'


//             }
//         )
//     }

//     async validate(payload: any) {
//         return { userID: payload.sub, usuario: payload.usuario }
//     }
// }
