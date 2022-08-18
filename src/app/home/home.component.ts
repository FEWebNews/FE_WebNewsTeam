import { Component, OnInit } from '@angular/core';
import { News } from '../model/news.model';
import { RssService } from '../services/rss.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private rss : RssService) { }
  dataRSS : News []=  []
  ngOnInit(): void {
    this. getItem()
  }
  getItem(){
    this.rss.getItem().subscribe(res => {
      this.dataRSS=res
     
    })
  }
}
