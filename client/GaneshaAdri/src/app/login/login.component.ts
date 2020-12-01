import { OnInit, Component } from '@angular/core';
import { ApiauthServices } from '../blog/services/apiauth.service';
import { StatusResponse } from '../blog/models/status';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../blog/models/login';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {

    public loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    })
    /* public loginForm = new FormGroup({
         email: new FormControl(''),
         password: new FormControl('')
     });*/

    public email: string;
    public password: string;
    constructor(public apiauthService: ApiauthServices, private router: Router, private formBuilder: FormBuilder) {debugger
       if (this.apiauthService.usuarioData) {
            this.router.navigate(['/']);
        }

}

    ngOnInit() {

    }

    login() {
        console.log(this.loginForm.value);
        this.apiauthService.login(this.loginForm.value).subscribe(response => {
            if (response.status = StatusResponse.Success) {
                this.router.navigate(['/']);
            }
        });
    }

    logout(){
        this.apiauthService.logout();
    }
}       