import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Message } from '../message';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})

export class UserinfoComponent implements OnInit {

  friend1: User;


  constructor() { }

  ngOnInit() {
  }

}
