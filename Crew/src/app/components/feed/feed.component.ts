import { Component, OnInit } from '@angular/core'
import { Color, ObservableArray, SearchBar } from '@nativescript/core';
import { Discovery } from '~/app/models/discovery.model';
import { NavigationUtils } from '~/app/utils/navigationUtils';
import { FeedService } from "../../services/feed.service";
import { RouterExtensions } from "@nativescript/angular";
import { ProfileService } from '~/app/services/profile.service';
import { Feedback } from "nativescript-feedback";

@Component({
  selector: 'Feed',
  templateUrl: './feed.component.html',
  styleUrls: ["./feed.component.scss"],
})
export class FeedComponent implements OnInit {

  discoveries: ObservableArray<Discovery>;
  categories: string[];
  visibilities: Map<string, boolean> = new Map();

  private feedback = new Feedback();

  filteringFunction: (item: any) => any;

  searchbarBackgroundColor: Color = new Color("#D9D9D9");
  searchbarColor: Color = new Color(0, 255, 255, 255);

  constructor(private feedService: FeedService, private profileService: ProfileService, private routerExtension: RouterExtensions) {
    this.discoveries = new ObservableArray(this.feedService.mockData());
    this.categories = Array.from(new Set(this.feedService.mockData().map(d => d.category)));
    this.categories.forEach(c => this.visibilities.set(c, true));
  }

  ngOnInit(): void {
    this.discoveries = new ObservableArray(this.feedService.mockData());
  }

  showDetail(discovery: Discovery) {
    NavigationUtils.navigate("discovery", this.routerExtension, false, discovery);
  }

  onClear(event: any) {

    this.filteringFunction = (item: Discovery) => {
      true
    };
  }

  selectCategory(category: string) {
    if (this.allSelected()) {
      this.deselectAll();
    }

    this.visibilities.set(category, !this.visibilities.get(category));

    let data = this.feedService.mockData();
    this.discoveries = new ObservableArray<Discovery>(data.filter(d => this.visibilities.get(d.category)));
  }

  isCategorySelected(category: string) {
    return this.visibilities.has(category) ? this.visibilities.get(category) : true;
  }

  disableFocus(args) {
    const searchbar: SearchBar = <SearchBar>args.object;
    searchbar.textFieldBackgroundColor = this.searchbarBackgroundColor;
    searchbar.textFieldHintColor = this.searchbarColor;
  }

  onSubmit(args: any) {
    const searchBar = <SearchBar>args.object;
    const searchValue = searchBar.text.toLowerCase();

    this.filteringFunction = (item: Discovery) => {
      item.name.includes(searchValue);
    };
  }

  onTextChange(args: any) {
    const searchBar = <SearchBar>args.object;
    const searchValue = searchBar.text.toLowerCase();

    this.filteringFunction = (item: Discovery) => {
      item.name.includes(searchValue);
    };
  }

  book(discovery: Discovery) {
    this.profileService.book(discovery);
    this.feedback.success({ message: "You have successfully booked a discovery!", duration: 2000, backgroundColor: new Color("#49B4F0") });
  }

  isBooked(discovery: Discovery) {
    return this.profileService.isBooked(discovery);
  }

  private deselectAll() {
    this.visibilities.forEach((value, key) => {
      this.visibilities.set(key, false);
    });
  }

  private allSelected(): boolean {
    let allSelected = true;
    this.visibilities.forEach(value => {
      if (!value) {
        allSelected = false;
      }
    });

    return allSelected;
  }
}
