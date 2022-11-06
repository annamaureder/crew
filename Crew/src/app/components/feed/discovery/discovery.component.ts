import { Component, OnInit } from '@angular/core'
import { ObservableArray } from '@nativescript/core';
import { Discovery } from '~/app/models/discovery.model';
import { NavigationUtils } from '~/app/utils/navigationUtils';
import { PageRoute, RouterExtensions } from "@nativescript/angular";
import { switchMap } from "rxjs";

@Component({
  selector: 'Feed',
  templateUrl: './discovery.component.html',
  styleUrls: ["./discovery.component.scss"],
})
export class DiscoveryComponent implements OnInit {

  discovery: any;

  constructor(private pageRoute: PageRoute) {
  }

  ngOnInit(): void {
    this.pageRoute.activatedRoute.pipe(switchMap((activatedRoute) => activatedRoute.queryParams)).forEach((param) => {
      this.discovery = param;
    });
  }

}
