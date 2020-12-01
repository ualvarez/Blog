import { Component, OnInit } from '@angular/core';
import { ContentService } from "../services/content.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {
  res: any;
  terms: any;
  cont: any;
  article: any;
  constructor(private contentService: ContentService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.getContent();
  }

  getContent() {
    this.contentService.Get().subscribe((data: any) => {     
      this.res = data;
      this.terms = this.res[1].title;
      this.cont = this.res[1].content;
      console.log(this.res);
    })
  }
  getContentById(id: number, action: string) {
    debugger
    switch (action)
    {
      case "View":{
        this.router.navigate(['blog/details/' + id]);
        break;
      }
      case "Edit":{
        this.router.navigate(['blog/new/' + id]);
        break;
      }
    }
    
  }

  delete(id: number) {   
    this.contentService.Delete(id).subscribe((data: any) => {
      debugger;
      alert("Data delete Succesfully");
      this.router.navigate(['/Post']);
    })
  }

}
