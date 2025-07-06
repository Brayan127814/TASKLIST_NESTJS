import { Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tarea } from './entities/tarea.entity';
import { LessThanOrEqual, Repository } from 'typeorm';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guards';

@Injectable()
export class TareasService {

  constructor(
    @InjectRepository(Tarea)
    private readonly taskRepository: Repository<Tarea>
  ) { }


  async create(createTareaDto: CreateTareaDto, userId: number): Promise<Tarea> {

    const newTask = this.taskRepository.create(
      {
        ...createTareaDto,
        user: { id: userId }
      }
    )

    return this.taskRepository.save(newTask)
  }
  async findAll(userId: number): Promise<Tarea[]> {
    const tasks = await this.taskRepository.find({
      where: { user: { id: userId } }, // 👈 Esto está perfecto para relaciones
      relations: ['user'], // 👈 Opcional: incluye también los datos del usuario
    });
    return tasks;
  }

  async findOne(id: number): Promise<Tarea> {

    const task = await this.taskRepository.findOne({ where: { id } })

    if (!task) {
      throw new NotFoundException("No se encontro una tarea relacionada")
    }

    return task

  }

  async update(id: number, datos: Partial<Tarea>) {
    await this.taskRepository.update(id, datos)

    return await this.findOne(id)
  }

  async remove(id: number) {
    const task = await this.findOne(id)
    await this.taskRepository.delete(id)
    return task
  }
}
