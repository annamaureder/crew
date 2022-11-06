import { Component, OnInit } from '@angular/core'
import { Color, ObservableArray } from '@nativescript/core';
import { Discovery } from '~/app/models/discovery.model';
import { NavigationUtils } from '~/app/utils/navigationUtils';
import { PageRoute, RouterExtensions } from "@nativescript/angular";
import { switchMap } from "rxjs";
import { ProfileService } from '~/app/services/profile.service';
import { Feedback } from "nativescript-feedback";

@Component({
  selector: 'Feed',
  templateUrl: './discovery.component.html',
  styleUrls: ["./discovery.component.scss"],
})
export class DiscoveryComponent implements OnInit {

  discovery: any;

  private feedback = new Feedback();

  constructor(private pageRoute: PageRoute, private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.pageRoute.activatedRoute.pipe(switchMap((activatedRoute) => activatedRoute.queryParams)).forEach((param) => {
      this.discovery = param;
    });
  }

  book(discovery: Discovery) {
    this.profileService.book(discovery);
    this.feedback.success({ message: "You have successfully booked a discovery!", duration: 2000, backgroundColor: new Color("#49B4F0") });
  }

  isBooked(discovery: Discovery) {
    return this.profileService.isBooked(discovery);
  }

}
