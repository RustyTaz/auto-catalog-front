import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../services/http.service";
import {Car} from "../../domain/car";

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.less'],
  providers: [HttpService]
})
export class CatalogPageComponent implements OnInit {

  cars: Car[] = [];
  chooseBrand: number[] = [];
  chooseMaxSpeed: number[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getAllCars().subscribe(data => {
      this.cars = data;
    });
    console.log(this.cars);
  }

  choiceBrand(value: number) {
    if (!this.chooseBrand.includes(value)) {
      this.chooseBrand.push(value);
    } else this.chooseBrand = this.chooseBrand.filter((item) => {
      return item !== value;
    })
  }

  choiceMaxSpeed(value: number) {
    if (!this.chooseMaxSpeed.includes(value)) {
      this.chooseMaxSpeed.push(value);
    } else this.chooseMaxSpeed = this.chooseMaxSpeed.filter((item) => {
      return item !== value;
    })
  }

  checkBrand(value: string) {
    if (this.chooseBrand.length == 0) {
      return true;
    } else {
      if (value.includes('BMW') && this.chooseBrand.includes(1)) {
        return true;
      } else if (value.includes('Mercedes') && this.chooseBrand.includes(2)) {
        return true;
      } else if (value.includes('Lexus') && this.chooseBrand.includes(3)) {
        return true;
      } else return value.includes('Audi') && this.chooseBrand.includes(4);
    }
  }

  checkMaxSpeed(value: number) {
    if (this.chooseMaxSpeed.length == 0) {
      return true;
    } else {
      if (value < 201 && this.chooseMaxSpeed.includes(1)) {
        return true;
      } else if (value > 200 && value < 221 && this.chooseMaxSpeed.includes(2)) {
        return true;
      } else if (value > 220 && value < 241 && this.chooseMaxSpeed.includes(3)) {
        return true;
      } else return value > 240 && this.chooseMaxSpeed.includes(4);
    }
  }
}
