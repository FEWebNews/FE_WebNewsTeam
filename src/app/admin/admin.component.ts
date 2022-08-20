import {Component, OnInit} from '@angular/core';
import axios from 'axios';
import * as X2JS from "x2js";
import {RssService} from "../services/rss.service";
import {newArray} from "@angular/compiler/src/util";

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

  constructor(private rss: RssService) {
  }

  ngOnInit(): void {
    for (let i = 1; i < 30; i = i + 2) {
      this.done[i] = true;
      this.done[i + 1] = false;
    }
  }

  async createData(url: string, name: string, butCrea: number, butDel: number) {
    this.status = `Đang tải dữ liệu cho ${name}! Quá trình có thế mất ít phút`;
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
            this.status = `Tải thành công dữ liệu ${name}`;
            this.done[butCrea] = true;
            this.done[butDel] = false;
          } else {
            this.rss.createData(this.rss.getInfo(jsonObj, this.loopCreate), name).subscribe();
            this.loopCreate++;
          }
        }, 400);
      }, 3000);
    } catch (message) {
      this.status = `Không thể tải dữ liệu ${name}`;
    }
  }

  deleteData(name: string, butCrea: number, butDel: number) {
    this.status = `Đang xóa dữ liệu của ${name}! Quá trình có thế mất ít phút`;
    try {
      let delTime = setTimeout(() => {
        let delInter = setInterval(() => {
          if (this.loopDelete > this.numberNews) {
            clearInterval(delInter);
            clearTimeout(delTime);
            this.loopDelete = 1;
            this.status = `Xóa thành công dữ liệu ${name}`;
            this.done[butCrea] = false;
            this.done[butDel] = true;
          } else {
            this.rss.deleteData(this.loopDelete, name).subscribe();
            this.loopDelete++;
          }
        }, 400);
      }, 3000);
    } catch (message) {
      this.status = `Không thể xóa dữ liệu ${name}`;
    }
  }

}