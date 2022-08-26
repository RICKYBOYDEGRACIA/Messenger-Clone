import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})

export class SidebarComponent implements OnInit {
  
  public searchText : string = "";
  filteredConversations: any[];
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  conversations = [
    {
      name: 'Jay',
      latestMessage: 'Im too busy doing my task in School',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Im too busy doing my task in School', me: true },
        { id: 2, body: 'Im doing great, how about you?', me: false },
        { id: 3, body: 'Yow, how are you Jay?', me: true },
        { id: 4, body: 'Good morning Ricky', me: false },
      ],
    },
    {
      name: 'Ivan',
      latestMessage: 'Yeah sure, just come over here bro.',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'Yeah sure, just come over here bro.',  me: true },
        { id: 2, body: 'I need extra money to pay my rent, do you have extra money?', me: false },
        { id: 3, body: 'How could I help you bro', me: true },
        { id: 4, body: 'Yow Ricky, please help me!', me: false },
      ],
    },
    {
      name: 'Toledo',
      latestMessage: 'Yow!',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Yow!',  me: true },
      ],
    },
    {
      name: 'Jacob',
      latestMessage: 'HI!',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'HI!', me: true },
      ],
    },
    {
      name: 'Diego',
      latestMessage: 'Are you free tonight?',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Are you free tonight?', me: true },
      ],
    }
  ];


  constructor() {}

  ngOnInit(): void {}
}
