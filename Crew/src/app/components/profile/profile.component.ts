import { Component, OnInit } from '@angular/core';
import { Feedback } from 'nativescript-feedback';
import { Profile } from "../../models/profile.model";
import { ProfileService } from "../../services/profile.service";
import { switchMap } from "rxjs";
import { PageRoute } from '@nativescript/angular';
import { Color } from "@nativescript/core";

@Component({
  selector: 'Home',
  templateUrl: './profile.component.html',
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {

  profile: Profile;

  private feedback = new Feedback();

  constructor(private profileService: ProfileService, private pageRoute: PageRoute) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    this.pageRoute.activatedRoute.pipe(switchMap((activatedRoute) => activatedRoute.queryParams)).forEach((param) => {
      if (param.activate) {
        this.feedback.success({ message: "You have successfully activated your account!", duration: 2000, backgroundColor: new Color("#49B4F0") });
      }
    });

    this.profile = this.profileService.mockData();
  }

  getQRCodeImage(): string {
    const imageDescription = "data:image/png;base64,"
    return imageDescription + this.profile.qrCodeImage;
  }
}
