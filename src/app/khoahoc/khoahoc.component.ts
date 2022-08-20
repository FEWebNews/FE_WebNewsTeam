import {Component, OnInit} from '@angular/core';
import {News} from "../model/news.model";
import {RssService} from "../services/rss.service";

@Component({
  selector: 'app-khoahoc',
  templateUrl: './khoahoc.component.html',
  styleUrls: ['./khoahoc.component.scss']
})
export class KhoahocComponent implements OnInit {
  dataRSS: News [] = [];

  constructor(private rss: RssService) {
  }

  ngOnInit(): void {
    this.getItem("khoahoc");
  }

  getItem(name: string) {
    this.rss.getItem(name).subscribe(res => {
      this.dataRSS = res;

    });
  }
}
