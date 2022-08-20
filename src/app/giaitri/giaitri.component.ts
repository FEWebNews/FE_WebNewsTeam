import {Component, OnInit} from '@angular/core';
import {News} from "../model/news.model";
import {RssService} from "../services/rss.service";

@Component({
  selector: 'app-giaitri',
  templateUrl: './giaitri.component.html',
  styleUrls: ['./giaitri.component.scss']
})
export class GiaitriComponent implements OnInit {
  dataRSS: News [] = [];

  constructor(private rss: RssService) {
  }

  ngOnInit(): void {
    this.getItem("giaitri");
  }

  getItem(name: string) {
    this.rss.getItem(name).subscribe(res => {
      this.dataRSS = res;

    });
  }
}
