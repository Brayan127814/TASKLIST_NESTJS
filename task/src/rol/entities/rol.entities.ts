import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";

@Entity("rol")

export class Rol {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar' })
    roleName: string

    @Column({ type: 'varchar', length: 100 })
    descripcion: string

    @OneToMany(() => Usuario, (user) => user.rol)
    usuario: Usuario[]
}