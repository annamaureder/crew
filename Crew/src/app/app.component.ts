import { Component, OnInit } from '@angular/core';
import { NavigationUtils } from "~/app/utils/navigationUtils";
import { RouterExtensions } from "@nativescript/angular";
import { AppURL, handleOpenURL } from '@bradmartin/nativescript-urlhandler';
import { ChatsService } from "~/app/services/chats.service";

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {

  private selectedUrl = 'feed';

  constructor(private routerExtension: RouterExtensions, private chatService: ChatsService) {}

  ngOnInit(): void {
    handleOpenURL((appURL: AppURL) => {
      const path = appURL.path;
      if (path === "activate") {
        NavigationUtils.navigate("profile", this.routerExtension, true, { activate: true });
      }
    });
  }

  getNumberOfUnreadMsgs() {
    return this.chatService.getUnreadMessages();
  }

  isSelected(page: string) {
    return this.selectedUrl == page;
  }

  navigateTo(page: string) {
    this.selectedUrl = page;
    NavigationUtils.navigate(page, this.routerExtension);
  }
}
