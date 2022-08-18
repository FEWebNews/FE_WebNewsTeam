import {Component, OnInit} from '@angular/core';
import {RssService} from "../services/rss.service";
import {News} from "../model/news.model";
import {ActivatedRoute} from "@angular/router";
import axios from 'axios';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  contentList: Array<News> = new Array<News>();
  content: News | undefined;
  result: any;

  constructor(private rss: RssService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.rss.getItem().subscribe(res => {
      this.contentList = res;
      const id = parseInt(this.router.snapshot.params['id']);
      this.content = this.getContentItem(id);
      this.load(this.content?.link);
      window.scrollTo(0, 0);
    })
  }

  getContentItem(id: number) {
    return this.contentList.find((n: News) => n.id === id)
  }

  async load(url: any) {
    const response = await axios(url);
    let parser = new DOMParser();
    let parsedDocument = parser.parseFromString(response.data, "text/html");
    let item = parsedDocument.getElementsByClassName("sidebar-1")[0];
    let result = "";
    try {
      let header_content = item.getElementsByClassName("header-content")[0];
      let breadcrumb = header_content.getElementsByClassName("breadcrumb")[0];
      header_content.removeChild(breadcrumb);
    } catch (message) {
    }
    try {
      let info_movie = item.getElementsByClassName("info-movie")[0];
      item.removeChild(info_movie);
    } catch (message) {
    }
    try {
      let tagFooter = item.getElementsByClassName("footer-content")[0];
      item.removeChild(tagFooter);
    } catch (message) {
    }
    try {
      let tagFCKDetail = item.getElementsByClassName("fck_detail")[0];
      let listNews = tagFCKDetail.getElementsByClassName("list-news")[0];
      tagFCKDetail.removeChild(listNews);
    } catch (message) {
    }
    try {
      let btn_guicauhoi = item.getElementsByClassName("btn_guicauhoi_detail")[0];
      item.removeChild(btn_guicauhoi);
    } catch (message) {
    }
    let img = item.getElementsByClassName("fig-picture");
    for (let i = 0; i < img.length; i++) {
      result = img[i].getElementsByTagName("img")[0].outerHTML;
      result = result.replace("data-src", " src");
      result = result.replace(" src", " data-src");
      img[i].innerHTML = `${result}`;
    }
    this.result = item.outerHTML;
  }

}
