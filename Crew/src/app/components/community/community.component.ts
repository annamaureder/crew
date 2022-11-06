import { Component, OnInit } from '@angular/core';
import { Community } from "../../models/community.model";
import { CommunityService } from "../../services/community.service";

@Component({
  selector: 'Community',
  templateUrl: './community.component.html',
  styleUrls: ["./community.component.scss"],
})
export class CommunityComponent implements OnInit {

  community: Community;

  constructor(private communityService: CommunityService) {

  }

  ngOnInit(): void {
    this.community = this.communityService.mockData();
  }
}
