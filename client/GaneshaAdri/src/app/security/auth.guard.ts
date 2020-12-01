import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { ApiauthServices } from '../blog/services/apiauth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private apiauthservice: ApiauthServices) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const usuario = this.apiauthservice.usuarioData;
        debugger
        if(usuario){
            return true;
        }
        this.router.navigate(['/login']);
        return false;

    }
}