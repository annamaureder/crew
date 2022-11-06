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
      name: "Cocktailbar",
      provider: "Company XY",
      image: "~/assets/images/Cocktails.jpeg",
      description: "This is a description",
      location: "Location XY",
      numberSeat: 123,
      date: new Date(),
      category: "Education"
    },
      {
        name: "Weiterbildung",
        provider: "Company XY",
        image: "~/assets/images/Cocktails.jpeg",
        description: "This is a description",
        location: "Location XY",
        numberSeat: 123,
        date: new Date(),
        category: "Food"
      }, {
        name: "Yoga mit Mady",
        provider: "Company XY",
        image: "~/assets/images/Cocktails.jpeg",
        description: "This is a description",
        location: "Location XY",
        numberSeat: 123,
        date: new Date(),
        category: "Drinks"
      }, {
        name: "Stammtisch",
        provider: "Company XY",
        image: "~/assets/images/Cocktails.jpeg",
        description: "This is a description",
        location: "Location XY",
        numberSeat: 123,
        date: new Date(),
        category: "Event"
      }, {
        name: "Lichterfest",
        provider: "Company XY",
        image: "~/assets/images/Cocktails.jpeg",
        description: "This is a description",
        location: "Location XY",
        numberSeat: 123,
        date: new Date(),
        category: "Yoga"
      }];

    return data;
  }
}
