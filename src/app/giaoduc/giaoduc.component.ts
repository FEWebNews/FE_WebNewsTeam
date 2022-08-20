import {Component, OnInit} from '@angular/core';
import {RssService} from "../services/rss.service";
import {News} from "../model/news.model";

@Component({
  selector: 'app-giaoduc',
  templateUrl: './giaoduc.component.html',
  styleUrls: ['./giaoduc.component.scss']
})
export class GiaoducComponent implements OnInit {
  dataRSS: News [] = [];

  constructor(private rss: RssService) {
  }

  ngOnInit(): void {
    this.getItem("giaoduc");
  }

  getItem(name: string) {
    this.rss.getItem(name).subscribe(res => {
      this.dataRSS = res;

    });
  }
}
