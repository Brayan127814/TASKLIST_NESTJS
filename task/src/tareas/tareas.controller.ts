import { Controller, Get, Post, Body, Patch, Param, Delete,  UseGuards, Request} from '@nestjs/common';
import { Request as ExpressRequest } from 'express';

import { Tarea } from './entities/tarea.entity';
import { TareasService } from './tareas.service';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guards';
import { ParseOptions } from 'querystring';


@Controller('tareas')
export class TareasController {
  constructor(private readonly tareasService: TareasService) {}
  @UseGuards(JwtAuthGuard)
  @Post('addTask')
  create(@Body() createTareaDto: CreateTareaDto, @Request() req: ExpressRequest & {user:{id:number, usuario:string,rol:number}} ) {
    const userId = req.user.id

    return this.tareasService.create(createTareaDto,userId);
  }

@Get()
@UseGuards(JwtAuthGuard)
findAll(
  @Request() req: ExpressRequest & { user: { id: number } }
): Promise<Tarea[]> {
  return this.tareasService.findAll(req.user.id);
}

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tareasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() datos: Partial<Tarea>) {
    return this.tareasService.update(id, datos);
  }


  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tareasService.remove(id);
  }
}
