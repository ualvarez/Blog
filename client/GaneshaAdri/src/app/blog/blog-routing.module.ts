import { BlogComponent } from './blog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPostComponent } from './details-post/details-post.component';
import { PageContentComponent } from './page-content/page-content.component';
import { TextEditorComponent } from './text-editor/text-editor.component';

const routes: Routes = [
    {
        path: '', component: BlogComponent,        
        children: [
            {
                path: 'details/:slug',
                component: DetailsPostComponent
            },
            {
                path: 'post',
                component: PageContentComponent
            },
            {
                path: 'new/:slug',
                component: TextEditorComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }


