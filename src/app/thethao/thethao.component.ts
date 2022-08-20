import {Component, OnInit} from '@angular/core';
import {RssService} from "../services/rss.service";
import {News} from "../model/news.model";

@Component({
  selector: 'app-thethao',
  templateUrl: './thethao.component.html',
  styleUrls: ['./thethao.component.scss']
})
export class ThethaoComponent implements OnInit {
  dataRSS: News [] = [];

  constructor(private rss: RssService) {
  }

  ngOnInit(): void {
    this.getItem("thethao");
  }

  getItem(name: string) {
    this.rss.getItem(name).subscribe(res => {
      this.dataRSS = res;

    });
  }
}
