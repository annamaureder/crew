import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'Home',
  templateUrl: './feed.component.html',
  styleUrls: ["./feed.component.scss"],
})
export class FeedComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }
}
