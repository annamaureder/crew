import { Component, OnInit } from '@angular/core'
import { ObservableArray } from '@nativescript/core';
import { Discovery } from '~/app/models/discovery.model';
import { NavigationUtils } from '~/app/utils/navigationUtils';
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: 'Feed',
  templateUrl: './discovery.component.html',
  styleUrls: ["./discovery.component.scss"],
})
export class DiscoveryComponent implements OnInit {

  discoveries: Discovery;

  constructor(private routerExtension: RouterExtensions) {

  }

  ngOnInit(): void {
  }

  showDetail() {
    NavigationUtils.navigate("discovery", this.routerExtension);
  }
}
