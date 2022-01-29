import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../../services/news-api.service";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.less']
})
export class NewsPageComponent implements OnInit {
  newsDisplay:any[]=[];

  constructor(private apiService: NewsApiService ) {}

  ngOnInit(): void {
    this.apiService.getNews().subscribe((result)=>{
      console.log(result);
      this.newsDisplay=result.articles;


    });

  }

}
