import {Component, OnInit} from '@angular/core';
import {News} from "../model/news.model";
import {RssService} from "../services/rss.service";

@Component({
  selector: 'app-phapluat',
  templateUrl: './phapluat.component.html',
  styleUrls: ['./phapluat.component.scss']
})
export class PhapluatComponent implements OnInit {
  dataRSS: News [] = [];

  constructor(private rss: RssService) {
  }

  ngOnInit(): void {
    this.getItem("phapluat");
  }

  getItem(name: string) {
    this.rss.getItem(name).subscribe(res => {
      this.dataRSS = res;

    });
  }
}
