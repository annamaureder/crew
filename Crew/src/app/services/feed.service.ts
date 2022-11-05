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
      name: "Test",
      provider: "Company XY",
      image: "TEST",
      description: "This is a description",
      location: "Location XY",
      numberSeat: 123,
      date: new Date(),
      category: "Education"
    },
      {
        name: "Test",
        provider: "Company XY",
        image: "TEST",
        description: "This is a description",
        location: "Location XY",
        numberSeat: 123,
        date: new Date(),
        category: "Food"
      }, {
        name: "Test",
        provider: "Company XY",
        image: "TEST",
        description: "This is a description",
        location: "Location XY",
        numberSeat: 123,
        date: new Date(),
        category: "Drinks"
      }, {
        name: "Test",
        provider: "Company XY",
        image: "TEST",
        description: "This is a description",
        location: "Location XY",
        numberSeat: 123,
        date: new Date(),
        category: "Event"
      }, {
        name: "Test",
        provider: "Company XY",
        image: "TEST",
        description: "This is a description",
        location: "Location XY",
        numberSeat: 123,
        date: new Date(),
        category: "Yoga"
      }];

    return data;
  }
}
