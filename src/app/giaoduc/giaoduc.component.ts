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
  searchKey: string =''
  filterCategory: News[] = [];
  p: number = 1
  constructor(private rss: RssService) {
  }

  ngOnInit(): void {
    this.getItem("giaoduc");
    this.rss.search.subscribe((value: any) => {
      this.searchKey=value
    })
   
  }

  getItem(name: string) {
    this.rss.getItem(name).subscribe((res) => {
      this.dataRSS = res;
      this.filterCategory=res
    });
  }
  filterProduct(category: string){
    this.filterCategory=this.dataRSS
    .filter((a:any)=>{
      if(a.category==category || category==''){
        return a
      }
    })
  }
  
}
