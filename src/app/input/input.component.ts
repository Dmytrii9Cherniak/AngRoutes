import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  username: string;

  constructor() { }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.username)
    this.username = '';
  }
}
