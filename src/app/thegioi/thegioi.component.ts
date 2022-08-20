import {Component, OnInit} from '@angular/core';
import {News} from "../model/news.model";
import {RssService} from "../services/rss.service";

@Component({
  selector: 'app-thegioi',
  templateUrl: './thegioi.component.html',
  styleUrls: ['./thegioi.component.scss']
})
export class ThegioiComponent implements OnInit {
  dataRSS: News [] = [];

  constructor(private rss: RssService) {
  }

  ngOnInit(): void {
    this.getItem("thegioi");
  }

  getItem(name: string) {
    this.rss.getItem(name).subscribe(res => {
      this.dataRSS = res;

    });
  }

}
