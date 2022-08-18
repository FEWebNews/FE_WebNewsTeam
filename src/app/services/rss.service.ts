import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RssService {
  public url: string = "http://localhost:3000/"

  constructor(private http: HttpClient) {
  }

  getItem() {
    return this.http.get<any>(this.url + "home").pipe(map((res: any) => {
      return res
    }))
  }
}
