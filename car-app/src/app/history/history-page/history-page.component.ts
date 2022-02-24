import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.less']
})
export class HistoryPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let btnShowMore = document.getElementsByClassName("detail__text");
    for (let i = 0; i < btnShowMore.length; i++) {
      btnShowMore[i].addEventListener("click", function(this: any) {
        this.classList.toggle("active");
        let detailInfo = this.nextElementSibling;
        if (detailInfo.style.maxHeight) {
          detailInfo.style.maxHeight = null;
        } else {
          detailInfo.style.maxHeight = detailInfo.scrollHeight + "%";
        }
      });
    }
  }
}
