import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'Home',
  templateUrl: './chats.component.html',
  styleUrls: ["./chats.component.scss"],
})
export class ChatsComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }
}
