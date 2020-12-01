import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/blog/models/usuario';
import { ApiauthServices } from 'src/app/blog/services/apiauth.service';

@Component({
  selector: 'app-go-login', 
  templateUrl: './go-login.component.html', 
  styleUrls: ['./go-login.component.scss']
})
export class GoLoginComponent implements OnInit {

usuario: Usuario;

constructor(public apiauthService: ApiauthServices, private router: Router) {
  this.apiauthService.usuario.subscribe(res => {
    this.usuario = res;
    console.log('cambió el objeto:' + res);
  });
}

  
  logout()
  {
    this.apiauthService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {

  }

}
