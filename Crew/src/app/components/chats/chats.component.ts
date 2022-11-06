import { ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { EventData, TextView } from '@nativescript/core';
import { ProfileService } from '~/app/services/profile.service';
import { Profile } from "../../models/profile.model";
import { ChatsService } from "../../services/chats.service";

@Component({
  selector: 'Chats',
  templateUrl: './chats.component.html',
  styleUrls: ["./chats.component.scss"],
})
export class ChatsComponent implements OnInit {

  selectedCategory = "company";
  chats: any[];

  message: string = ""

  private profile: Profile;

  constructor(private profileService: ProfileService, private chatService: ChatsService, private changeDetection: ChangeDetectorRef) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    this.profile = this.profileService.mockData();
    this.chats = this.getChats();
  }

  onTextChange(args: EventData) {
    const view = args.object as TextView;
    this.message = view.text;
  }

  getTime(date: Date): string {
    const today = new Date();
    if (date.getDate() !== today.getDate() || date.getMonth() !== today.getMonth() || date.getFullYear() !== date.getFullYear()) {
      return date.toString();
    } else {
      return date.getHours() + ":" + date.getMinutes();
    }
  }

  sendMessage() {
    if (this.message.length > 0) {
      if (this.selectedCategory === 'company') {
        this.chatService.pushToCompanyChat(this.profile.id, this.profile.firstname + " " + this.profile.lastname, this.message, new Date());
        this.chats = this.getChats();
        this.changeDetection.detectChanges();
      }

      this.message = "";
    }
  }

  getChats(): Array<any> {
    if (this.selectedCategory === 'company') {
      return this.chatService.getCompanyChat();
    }

    return this.chatService.getPrivateChats();
  }

  selectCategory(category: string) {
    this.selectedCategory = category;

    if (this.selectedCategory === 'company') {
      this.chats = this.chatService.getCompanyChat();
    } else {
      this.chats = this.chatService.getPrivateChats();
    }
  }

  isCategorySelected(category: string) {
    return this.selectedCategory == category;
  }

  isOwnChat(id: number) {
    return this.profile.id === id;
  }
}
