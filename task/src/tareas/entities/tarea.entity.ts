import { Entity, PrimaryGeneratedColumn,Column , ManyToOne} from "typeorm";
import { Usuario } from "src/usuarios/entities/usuario.entity";
@Entity('tareas')
export class Tarea {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nombre: string

    @Column()
    descripcion: string

    @Column({type:'boolean' , default: false})
    estado?: boolean

    
    @ManyToOne(()=>Usuario, (user)=> user.tareas,{onDelete:'CASCADE'})
    user:Usuario
}
