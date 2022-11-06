import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Discovery } from "../models/discovery.model";

@Injectable({ providedIn: "root" })
export class FeedService {

  getDiscoveries(): Observable<Array<Discovery>> {
    return null;
  }

  mockData(): Array<Discovery> {
    let data: Array<Discovery> = [];

    data = [{
      name: "2 drinks for free",
      provider: "Krypt",
      image: "~/assets/images/krypt.jpg",
      description: "This is a description",
      location: "Location XY",
      numberSeatTotal: 5,
      numberSeatLeft: 3,
      date: new Date(),
      category: "Food"
    },
      {
        name: "one table for 4 people",
        provider: "Seven North",
        image: "~/assets/images/seven_north.jpg",
        description: "This is a description",
        location: "Location XY",
        numberSeatTotal: 5,
        numberSeatLeft: 3,
        date: new Date(),
        category: "Food"
      }, {
        name: "bottle of wine for free",
        provider: "Tian Bistro",
        image: "~/assets/images/tian.jpg",
        description: "This is a description",
        location: "Location XY",
        numberSeatTotal: 5,
        numberSeatLeft: 3,
        date: new Date(),
        category: "Drinks"
      }];

    return data;
  }
}
