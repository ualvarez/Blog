import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { ContentService } from './services/content.service';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { PageContentComponent } from './page-content/page-content.component';
import { DetailsPostComponent } from './details-post/details-post.component';
import { FormsModule } from '@angular/forms';
import { BlogRoutingModule } from './blog-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SafePipe } from './pipes/safe.pipe';
import { JwtInterceptor } from '../security/jwt.interceptor';




@NgModule({
  declarations: [BlogComponent, TextEditorComponent, PageContentComponent, DetailsPostComponent, SafePipe],
  imports: [
    CommonModule,
    CKEditorModule,
    FormsModule,
    BlogRoutingModule,
    HttpClientModule   
  ],
  providers: [
    ContentService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  exports: [SafePipe]
})
export class BlogModule { }
