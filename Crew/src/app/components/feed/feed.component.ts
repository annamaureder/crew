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

  searchbarBackgroundColor: Color = new Color("#ffffff");
  searchbarColor: Color = new Color("#EAEAEA");

  constructor(private feedService: FeedService, private routerExtension: RouterExtensions) {
    this.discoveries = new ObservableArray(this.feedService.mockData());
  }

  ngOnInit(): void {
    this.discoveries = new ObservableArray(this.feedService.mockData());
  }

  showDetail(discovery: Discovery) {
    NavigationUtils.navigate("discovery", this.routerExtension, false, discovery);
  }

  onClear(event: any) {

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
