import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {
  public isCollapsedchat = true;
  public isCollapsedmedia = true;
  public isCollapsedprivacy = true;

  constructor() { }

  ngOnInit(): void {
  }
  conversation;
 
  onConversationSelected(conversation){
    this.conversation = conversation;
  }

}
