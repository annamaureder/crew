import { Component } from '@angular/core';
import { NavigationUtils } from "~/app/utils/navigationUtils";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {

  private selectedUrl = 'feed';

  constructor(private routerExtension: RouterExtensions) {

  }

  onBottomNavigationTabSelected(event: any) {

  }

  onBottomNavigationTabPressed(event: any) {

  }

  isSelected(page: string) {
    return this.selectedUrl == page;
  }

  navigateTo(page: string) {
    this.selectedUrl = page;
    NavigationUtils.navigate(page, this.routerExtension);
  }

}
