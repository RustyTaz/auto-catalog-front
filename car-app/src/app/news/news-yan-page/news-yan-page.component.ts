import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../../services/news-api.service";

@Component({
  selector: 'app-news-yan-page',
  templateUrl: './news-yan-page.component.html',
  styleUrls: ['./news-yan-page.component.less']
})
export class NewsYanPageComponent implements OnInit {
  newsDisplay:any[]=[];

  constructor(private apiService: NewsApiService ) {}

  ngOnInit(): void {
    this.apiService.getNewsFromYandex().subscribe((result)=>{
      console.log(result);
      this.newsDisplay=result;
    });
  }

}
