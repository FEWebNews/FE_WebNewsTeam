import {Component, OnInit} from '@angular/core';
import {RssService} from "../services/rss.service";
import {News} from "../model/news.model";

@Component({
  selector: 'app-thoisu',
  templateUrl: './thoisu.component.html',
  styleUrls: ['./thoisu.component.scss']
})
export class ThoisuComponent implements OnInit {
  dataRSS: News [] = [];

  constructor(private rss: RssService) {
  }

  ngOnInit(): void {
    this.getItem("thoisu");
  }

  getItem(name: string) {
    this.rss.getItem(name).subscribe(res => {
      this.dataRSS = res;
    })
  }

}
