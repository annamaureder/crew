import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Community } from "../models/community.model";

@Injectable({ providedIn: "root" })
export class CommunityService {

  getCompany(): Observable<Community> {
    return null;
  }

  mockData(): Community {
    let community: Community;

    return {
      name: "Tian Bistro",
      image: "string",
      street: "Schrankgasse 4",
      city: "1070 Vienna",
      employees: ["Eva Musterfrau", "Max Mustermann"]
    }
  }

}
