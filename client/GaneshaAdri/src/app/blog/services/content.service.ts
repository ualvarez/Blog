import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Content } from "../models/content";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  url: string = 'https://localhost:44327/api/contenido';

  constructor(private http: HttpClient) { }

  AddUpdate(pagecontent : Content) {
    debugger
    if(pagecontent.id == null)
    return this.http.post(this.url, pagecontent);
    else
    return this.http.put(this.url, pagecontent);
  }
  Get() {   
    return this.http.get(this.url);
  }
  GetById(id) {
    debugger
    return this.http.get(this.url + '/GetById?id=' + id);
  }

  Delete(id) {
    debugger
    return this.http.delete(this.url + '?id=' + id);
  }
}
