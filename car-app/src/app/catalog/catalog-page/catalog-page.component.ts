import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Car} from "../../domain/car";
import {MatDialog} from "@angular/material/dialog";
import {ModelPageComponent} from "../../model/model-page/model-page.component";

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.less'],
  providers: [HttpService]
})
export class CatalogPageComponent implements OnInit {

  cars: Car[] = [];
  backupChooseBrand: number[] = [];
  chooseBrand: number[] = [];
  backupChooseMaxSpeed: number[] = [];
  chooseMaxSpeed: number[] = [];
  activeFilter!: boolean;

  constructor(private httpService: HttpService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.httpService.getAllCars().subscribe(data => {
      this.cars = data;
    });
  }

  //(deleteCar)="refreshCars()"
  refreshCars() {
    this.httpService.getAllCars().subscribe(data => {
      this.cars = data;
    });
  }

  applyFilter() {
    this.chooseBrand = this.backupChooseBrand.slice();
    this.chooseMaxSpeed = this.backupChooseMaxSpeed.slice();
    this.activeFilter = true;
  }

  resetFilter() {
    let resetInput = document.getElementsByTagName('input');
    for (let i = 0; i < resetInput.length; i++) {
      resetInput[i].checked = false;
    }
    this.backupChooseBrand = [];
    this.backupChooseMaxSpeed = [];
    this.activeFilter = false;
  }

  choiceBrand(value: number) {
    if (!this.backupChooseBrand.includes(value)) {
      this.backupChooseBrand.push(value);
    } else this.backupChooseBrand = this.backupChooseBrand.filter((item) => {
      return item !== value;
    })
  }

  choiceMaxSpeed(value: number) {
    if (!this.backupChooseMaxSpeed.includes(value)) {
      this.backupChooseMaxSpeed.push(value);
    } else this.backupChooseMaxSpeed = this.backupChooseMaxSpeed.filter((item) => {
      return item !== value;
    })
  }

  checkBrand(value: string) {
    if (this.activeFilter) {
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
    } else return true;
  }

  checkMaxSpeed(value: number) {
    if (this.activeFilter) {
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
    } else return true;
  }

  openModalCar(id: number): void {
    const dialogRef = this.dialog.open(ModelPageComponent, {
      data: {id: id},
      width: '370px',
      height: '465px'
    })
    dialogRef.afterClosed().subscribe();

  }
}
