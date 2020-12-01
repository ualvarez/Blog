import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.scss']
})
export class DetailsPostComponent implements OnInit {
  res: any;
  title: any;
  content: any;

  constructor(private route: ActivatedRoute, private contentService: ContentService) { }

  ngOnInit(): void {
    let Id = this.route.snapshot.params.slug;
    if (Id != null)
    {
      this.getContentById(Id);
    }    
  }

  getContentById(Id: string) {
    debugger
    this.contentService.GetById(Id).subscribe((data: any) => {
      debugger
      this.res = data;
      this.title = this.res.title;
      this.content = this.res.content;
      console.log(this.res);
    });
  }

}
