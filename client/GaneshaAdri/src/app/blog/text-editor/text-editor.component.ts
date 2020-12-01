import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContentService } from "../services/content.service";
import { Content } from "../models/content";
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string;
  @ViewChild('PageContent') PageContent: any;
  res: any;
    constructor(private contentService: ContentService, private router: Router, private route: ActivatedRoute) { }
  contentData = new Content();

  ngOnInit(): void {
    debugger
    let Id = this.route.snapshot.params.slug;
    if (Id != 0)
    {
      this.getContentById(Id);
    }
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlaintText: true
    };
  }

  onSubmit() {
   
    this.contentService.AddUpdate(this.contentData).subscribe((data: any) => {
      debugger;
      alert("Data saved Succesfully");
      this.router.navigate(['/Post']);
    })
  }

  getContent() {
    this.contentService.Get().subscribe((data: any) => {
      this.res = data;
      console.log(this.res);
    })
  }

  getContentById(Id: string) {
    debugger
    this.contentService.GetById(Id).subscribe((data: any) => {
      debugger
      this.res = data;
      this.contentData.id = this.res.id;
      this.contentData.title = this.res.title;
      this.contentData.content = this.res.content;
      console.log(this.res);
    });
  }
}
