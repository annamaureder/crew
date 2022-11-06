import { Component, OnInit } from '@angular/core';
import { Profile } from "../../models/profile.model";
import { ProfileService } from "../../services/profile.service";

@Component({
  selector: 'Home',
  templateUrl: './profile.component.html',
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {

  profile: Profile;

  constructor(private profileService: ProfileService) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    this.profile = this.profileService.mockData();
  }

  getQRCodeImage(): string {
    const imageDescription = "data:image/png;base64,"
    return imageDescription + this.profile.qrCodeImage;
  }
}
