import {Component, OnInit} from '@angular/core';
import {News} from "../model/news.model";
import {RssService} from "../services/rss.service";

@Component({
  selector: 'app-sohoa',
  templateUrl: './sohoa.component.html',
  styleUrls: ['./sohoa.component.scss']
})
export class SohoaComponent implements OnInit {
  dataRSS: News [] = [];
  searchKey: string =''
  filterCategory: News[] = [];
  p: number = 1
  constructor(private rss: RssService) {
  }

  ngOnInit(): void {
    this.getItem("sohoa");
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
