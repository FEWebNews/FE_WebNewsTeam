import {Component, OnInit} from '@angular/core';
import axios from 'axios';
import * as X2JS from "x2js";
import {RssService} from "../services/rss.service";
import {newArray} from "@angular/compiler/src/util";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  loopCreate: number = 0;
  loopDelete: number = 1;
  numberNews: number = 50;
  status: string = "";
  done: Array<boolean> = new Array<boolean>();
  public user: any;

  constructor(private rss: RssService, private auth: AuthService) {
  }

  ngOnInit(): void {
    for (let i = 1; i < 30; i = i + 2) {
      this.done[i] = true;
      this.done[i + 1] = false;
    }
    this.auth.auth.user.subscribe(user => {
      this.user = user;
    })
  }

  async createData(url: string, name: string, butCrea: number, butDel: number) {
    this.status = `Downloading data ${name}! May take a few minutes!`;
    const response = await axios(url);
    var x2js = new X2JS;
    var jsonObj = x2js.xml2js(response.data);
    try {
      let creaTime = setTimeout(() => {
        let creaInter = setInterval(() => {
          if (this.loopCreate >= this.numberNews) {
            clearInterval(creaInter);
            clearTimeout(creaTime);
            this.loopCreate = 0;
            this.status = `Downloaded data ${name}`;
            this.done[butCrea] = true;
            this.done[butDel] = false;
          } else {
            this.rss.createData(this.rss.getInfo(jsonObj, this.loopCreate), name).subscribe();
            this.loopCreate++;
          }
        }, 400);
      }, 3000);
    } catch (message) {
      this.status = `Can't download data ${name}`;
    }
  }

  deleteData(name: string, butCrea: number, butDel: number) {
    this.status = `Deleting data ${name}! May take a few minutes!`;
    try {
      let delTime = setTimeout(() => {
        let delInter = setInterval(() => {
          if (this.loopDelete > this.numberNews) {
            clearInterval(delInter);
            clearTimeout(delTime);
            this.loopDelete = 1;
            this.status = `Deleted data ${name}`;
            this.done[butCrea] = false;
            this.done[butDel] = true;
          } else {
            this.rss.deleteData(this.loopDelete, name).subscribe();
            this.loopDelete++;
          }
        }, 400);
      }, 3000);
    } catch (message) {
      this.status = `Can't delete data ${name}`;
    }
  }

}
