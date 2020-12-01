import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoHomeComponent } from './go-home/go-home.component';
import { GoBlogComponent } from './go-blog/go-blog.component';
import { GoAboutComponent } from './go-about/go-about.component';
import { GoLoginComponent } from './go-login/go-login.component';
import { GoRegisterComponent } from './go-register/go-register.component';




@NgModule({
  declarations: [GoHomeComponent, GoBlogComponent, GoAboutComponent, GoLoginComponent,  GoRegisterComponent],
  imports: [
    CommonModule
  ],
  exports: [GoHomeComponent, GoBlogComponent, GoAboutComponent, GoLoginComponent,  GoRegisterComponent]
})
export class SharedModule { }
