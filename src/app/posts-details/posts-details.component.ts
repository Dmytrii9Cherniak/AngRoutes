import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../services/post.service";
import {IPost} from "../models/post";

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.css']
})
export class PostsDetailsComponent implements OnInit {

  fullPost: IPost;

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostService) {
    this.activatedRoute.params.subscribe(params => {
      this.postsService.getPost(params['id']).subscribe(value => this.fullPost = value)
    })
  }

  ngOnInit(): void {}

}
