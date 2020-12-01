import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './blog/models/usuario';
import { ApiauthServices } from './blog/services/apiauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GaneshaAdri';
  usuario: Usuario;

  constructor(public apiauthService: ApiauthServices, private router: Router) {
    this.apiauthService.usuario.subscribe(res => {
      this.usuario = res;
      console.log('cambió el objeto:' + res);
    });
  }
}
