import {Component, OnInit} from '@angular/core';
import {MatSlideToggle, MatSlideToggleChange, MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.less']
})
export class NewsContainerComponent implements OnInit {
  changeNews: boolean = true;
  changeNewsText: string = "Новости Google Api"

  constructor() {
  }

  onChange() {
    if (this.changeNews) {
      this.changeNews = !this.changeNews;
      this.changeNewsText = "Новости Яндекс Авто";
    } else {
      this.changeNews = !this.changeNews;
      this.changeNewsText = "Новости Google Api"
    }

  }

  ngOnInit(): void {
  }

}
