import {Component, OnInit} from '@angular/core';
import {News} from '../model/news.model';
import {AuthService} from '../services/auth.service';
import {RssService} from '../services/rss.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchTerm: any
  dataRSS: News [] = [];
  public user: any;
  date: any;

  constructor(private rss: RssService, private auth: AuthService) {
  }

  ngOnInit(): void {
    this.rss.getItem("home").subscribe((res) => {
      this.dataRSS = res;
    })
    this.auth.auth.user.subscribe(user => {
      this.user = user;
    })
    this.date = Date.now();
  }

  search(event: any) {
    this.searchTerm = event.target.value
    console.log(this.searchTerm)
    this.rss.search.next(this.searchTerm)
  }

  signOut() {
    this.auth.auth.signOut()
  }
}
