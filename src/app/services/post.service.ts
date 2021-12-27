import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = `https://jsonplaceholder.typicode.com/posts`

  constructor(private httpCLient: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    return this.httpCLient.get<IPost[]>(this.url)
  }

  getPost(id: string): Observable<IPost[]> {
    return this.httpCLient.get<IPost[]>(this.url + '/' + id)
  }

}
