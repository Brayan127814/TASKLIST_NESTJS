import { Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import * as bcrypt from 'bcryptjs'
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guards';
@Injectable()
export class UsuariosService {

  constructor(@InjectRepository(Usuario)
  private readonly userRepository: Repository<Usuario>
  ) { }
  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const hasPassword = await bcrypt.hash(createUsuarioDto.password, 10)
    const newUser = this.userRepository.create({
      ...createUsuarioDto,
      password: hasPassword
    })
    return this.userRepository.save(newUser)
  }

  async userEmail(usuario: string) {
    const user = await this.userRepository.findOne({
      where: { usuario },
      relations: ['rol']
    })
    if (!user) {
      throw new NotFoundException('Usuario no encontrado')
    }
    return user
  }

 
  async findAll(): Promise<Usuario[]> {
    const usuarios = await this.userRepository.find()

    return usuarios
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
