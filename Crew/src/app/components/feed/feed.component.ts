import { Component, OnInit } from '@angular/core'
import { Color, ObservableArray, SearchBar } from '@nativescript/core';
import { Discovery } from '~/app/models/discovery.model';
import { NavigationUtils } from '~/app/utils/navigationUtils';
import { FeedService } from "../../services/feed.service";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: 'Feed',
  templateUrl: './feed.component.html',
  styleUrls: ["./feed.component.scss"],
})
export class FeedComponent implements OnInit {

  discoveries: ObservableArray<Discovery>;
  categories: string[];
  visibilities: Map<string, boolean> = new Map();

  searchbarBackgroundColor: Color = new Color("#D9D9D9");
  searchbarColor: Color = new Color(0, 255, 255, 255);

  constructor(private feedService: FeedService, private routerExtension: RouterExtensions) {
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

  }

  selectCategory(category: string) {
    if (this.visibilities.has(category)) {
      this.visibilities.set(category, !this.visibilities.get(category));
    } else {
      this.visibilities.set(category, false);
    }

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

    let data = this.feedService.mockData();
    this.discoveries = new ObservableArray<Discovery>(data.filter(d => d.name.includes(searchValue)));
  }

  onTextChange(args: any) {
    const searchBar = <SearchBar>args.object;
    const searchValue = searchBar.text.toLowerCase();

    console.log(searchValue);

    let data = this.feedService.mockData();
    console.log(data.length);

    console.log(data.filter(d => d.name.includes(searchValue)).length);
    this.discoveries = new ObservableArray<Discovery>(data.filter(d => d.name.includes(searchValue)));
  }
}
