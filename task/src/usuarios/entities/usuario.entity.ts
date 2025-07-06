import { Rol } from "src/rol/entities/rol.entities";
import { Tarea } from "src/tareas/entities/tarea.entity";
import { Entity, PrimaryGeneratedColumn,Column, OneToMany, ManyToOne  } from "typeorm";
@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nombre:string

    @Column()
    apellido:string

    @Column({unique:true})
    usuario:string

   @Column()
   password: string
    @OneToMany(()=> Tarea,(task)=> task.user)
    tareas:Tarea[]

    @ManyToOne(()=> Rol,(rol)=>rol.usuario)
    
    rol:Rol
}
