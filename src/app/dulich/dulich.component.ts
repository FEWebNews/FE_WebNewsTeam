import {Component, OnInit} from '@angular/core';
import {RssService} from "../services/rss.service";
import {News} from "../model/news.model";

@Component({
  selector: 'app-dulich',
  templateUrl: './dulich.component.html',
  styleUrls: ['./dulich.component.scss']
})
export class DulichComponent implements OnInit {
  dataRSS: News [] = [];

  constructor(private rss: RssService) {
  }

  ngOnInit(): void {
    this.getItem("dulich");
  }

  getItem(name: string) {
    this.rss.getItem(name).subscribe(res => {
      this.dataRSS = res;

    });
  }
}
