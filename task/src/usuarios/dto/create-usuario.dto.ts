import { IsString, IsEmail ,Length } from "class-validator";

export class CreateUsuarioDto {

    @IsString()
    @Length(1,20)
    nombre: string
    
    @IsString()
    @Length(1,20)
    apellido: string

    @IsString()
    usuario:string

    @IsString()
    password:string
}
