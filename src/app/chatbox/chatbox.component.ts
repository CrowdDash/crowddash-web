import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {

  private chat: string[] = [];
  private curMessage: string = "";

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.curMessage);
    console.log("here");
    this.chat.push(this.curMessage);
    this.curMessage = "";
  }

}
