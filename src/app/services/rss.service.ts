import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, concat, map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RssService {
  // public url: string = "http://localhost:3000/";
  public url: string = "https://app-data-server.herokuapp.com/";
  public search = new BehaviorSubject<string>("")
  constructor(private http: HttpClient) {
  }

  getInfo(data: any, i: number): any {
    return data.rss.channel.item[i];
  }

  getItem(name: string) {
    return this.http.get<any>(this.url + name).pipe(map((res: any) => {
      return res
    }))
  }

  createData(data: any, name: string): Observable<any> {
    return this.http.post<any>(this.url + name, data)
  }

  deleteData(id: number, name: string): Observable<any> {
    return concat(this.http.delete<any>(this.url + name + "/" + id));
  }
}
