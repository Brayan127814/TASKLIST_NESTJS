import { IsOptional, IsString, Length } from "class-validator";


export class CreateTareaDto {
    @IsString()
    nombre:string

    @IsString()
    @Length(1,100)
    descripcion: string

    @IsOptional()
    estado?:boolean

}
