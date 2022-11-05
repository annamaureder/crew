import { Component } from '@angular/core';
import { NavigationUtils } from "~/app/utils/navigationUtils";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {

  constructor(private routerExtension: RouterExtensions) {

  }

  onBottomNavigationTabSelected(event: any) {

  }

  onBottomNavigationTabPressed(event: any) {

  }

  navigateTo(page: string) {
    NavigationUtils.navigate(page, this.routerExtension);
  }

}
