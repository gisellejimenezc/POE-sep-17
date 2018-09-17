import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

<<<<<<< HEAD
  constructor(public messageService: MessageService) { }
=======
  constructor(public messageService: MessageService) {}
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8

  ngOnInit() {
  }

}
