import {Component, OnInit} from '@angular/core';
import {News} from "../model/news.model";
import {RssService} from "../services/rss.service";

@Component({
  selector: 'app-kinhdoanh',
  templateUrl: './kinhdoanh.component.html',
  styleUrls: ['./kinhdoanh.component.scss']
})
export class KinhdoanhComponent implements OnInit {
  dataRSS: News [] = [];

  constructor(private rss: RssService) {
  }

  ngOnInit(): void {
    this.getItem("kinhdoanh");
  }

  getItem(name: string) {
    this.rss.getItem(name).subscribe(res => {
      this.dataRSS = res;

    });
  }

}
