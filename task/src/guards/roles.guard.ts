import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLE_KEY } from "src/decorators/roles.decortors";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const requeridRol = this.reflector.getAllAndOverride<string[]>(ROLE_KEY, [
            context.getHandler(),
            context.getClass()
        ])
        if(!requeridRol)return true

        const {user} = context.switchToHttp().getRequest()

        return requeridRol.includes(user.rol)
    }
}