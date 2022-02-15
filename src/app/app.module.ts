import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from "@angular/router";
import { UserDetailsComponent } from './user-details/user-details.component';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import {UserDeactivatorService} from "./services/user-deactivator.service";
import {PostsActivateService} from "./services/posts-activate.service";
import { InputComponent } from './input/input.component';
import {FormsModule} from "@angular/forms";

let routes : Routes = [
  {path: 'users', component: UsersComponent, canDeactivate: [UserDeactivatorService],
    children: [{path: ':id', component: UserDetailsComponent}]},
  {path: 'posts', component: PostsComponent, canActivate: [PostsActivateService]},
  {path: 'posts/:id', component: PostsDetailsComponent},
  {path: 'input', component: InputComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    HeaderComponent,
    UserDetailsComponent,
    PostsDetailsComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
