import { Injectable } from "@angular/core";
import { Profile } from "../models/profile.model";

@Injectable({ providedIn: "root" })
export class ChatsService {

  currentDate = new Date();
  unreadMessages: number = 0;

  companyChat: Array<any> = [{
    id: 123,
    name: "Eva Maureder",
    message: "Hello? Anybody joining me at Mochi's?",
    date: new Date(this.currentDate.getTime() - 200000),
    read: false,
  },
    {
      id: 124,
      name: "Hans Fessl",
      message: "Yeah, I'm in! Already booked :)",
      date: new Date(this.currentDate.getTime() - 150000),
      read: false
    }];

  getPrivateChats() {
    return [{
      id: 123,
      name: "Eva Maureder",
      message: "Hello, what's up?",
      date: new Date()
    }];
  }

  getCompanyChat() {
    return this.companyChat;
  }

  getUnreadMessages(): number {
    this.unreadMessages = 0;
    this.companyChat.forEach(c => {
      if (!c.read) {
        this.unreadMessages++;
      }
    })

    return this.unreadMessages;
  }

  pushToCompanyChat(id: number, name: string, message: string, date: Date) {
    this.companyChat.push({ id: id, name: name, message: message, date: date });
  }
}
