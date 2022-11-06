import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Discovery } from "../models/discovery.model";

@Injectable({ providedIn: "root" })
export class FeedService {

  data: Array<Discovery> = [];

  constructor() {
    const now: Date = new Date();

    this.data = [{
      name: "2 drinks for free",
      provider: "Krypt",
      image: "~/assets/images/krypt.jpg",
      description: "This is a description",
      street: "Burggasse 13",
      city: "Vienna",
      duration: "whole Evening",
      start: "from 9pm",
      numberSeatTotal: 12,
      numberSeatLeft: 9,
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3),
      category: "Food"
    },
      {
        name: "one table for 4 people",
        provider: "Seven North",
        image: "~/assets/images/seven_north.jpg",
        description: "This is a description",
        street: "Theatergasse 73",
        city: "Vienna",
        duration: "evening",
        start: "from 8pm",
        numberSeatTotal: 4,
        numberSeatLeft: 2,
        date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2),
        category: "Food"
      }, {
        name: "bottle of wine for free",
        provider: "Tian Bistro",
        image: "~/assets/images/tian.jpg",
        description: "This is a description",
        street: "Rainergasse 95",
        city: "Vienna",
        duration: "whole day",
        start: "from 9am",
        numberSeatTotal: 10,
        numberSeatLeft: 7,
        date: new Date(),
        category: "Drinks"
      },
      {
        name: "barista workshop",
        provider: "Coffeeworld",
        image: "~/assets/images/barista.png",
        description: "This is a description",
        street: "Wasserweg 73",
        city: "Vienna",
        duration: "whole day",
        start: "from 8am",
        numberSeatTotal: 3,
        numberSeatLeft: 2,
        date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6),
        category: "Workshop"
      },
      {
        name: "after work billiard",
        provider: "Köö",
        image: "~/assets/images/billiard.jpg",
        description: "This is a description",
        street: "Spitzweg 32b",
        city: "Vienna",
        duration: "at night",
        start: "from 11pm",
        numberSeatTotal: 8,
        numberSeatLeft: 2,
        date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 9),
        category: "Activity"
      }];
  }

  getDiscoveries(): Observable<Array<Discovery>> {
    return null;
  }

  mockData(): Array<Discovery> {
    return this.data.sort((d1, d2) => (d1.date.getTime() - d2.date.getTime()));
  }

  reduceAmount(discovery: Discovery) {
    const index = this.data.findIndex(d => d.name === discovery.name);
    let current: Discovery = this.data.at(index);
    current.numberSeatLeft = current.numberSeatLeft - 1;

    this.data.splice(index, 1);
    this.data.push(current);
  }
}
