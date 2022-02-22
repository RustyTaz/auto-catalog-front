import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private newsApiUrl="https://newsapi.org/v2/everything?q=autocar&sortBy=popularity&apiKey=9db6aa4d45af43adad50ad4368e8278f";

  constructor(private http:HttpClient) {}

  getNews():Observable<any>{
    return this.http.get(this.newsApiUrl);
  }


  getNewsFromYandex():Observable<any>{
    return this.http.get('http://localhost:8080/api/news');
  }


}
