import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Car} from "../../domain/car";
import {HttpService} from "../../services/http.service";
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Observable} from "rxjs";

@Component({
  selector: 'app-model-page',
  templateUrl: './model-page.component.html',
  styleUrls: ['./model-page.component.less'],
  providers: [HttpService]
})
export class ModelPageComponent implements OnInit {

  id!: number;
  car!: Car;
  access: boolean = false;
  token: any;
  cars: Observable<Car[]> | undefined;
  //@Output() refreshCars = new EventEmitter();

  constructor(private route: ActivatedRoute, private httpService: HttpService,
              @Inject(MAT_DIALOG_DATA) public data: { id: number },
              public dialogRef: MatDialogRef<ModelPageComponent>) {
    this.id = data.id;
  }

  ngOnInit(): void {
    this.httpService.getOneCar(this.id).subscribe(data => {
      this.car = data;
    })
    this.token = localStorage.getItem("auth_token");
    if (this.token !== null) {
      this.access = true;
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  editCar() {
  }

  deleteCar() {
    this.httpService.deleteCar(this.id).subscribe(() => {
      //this.refreshCars.emit();
    });
    this.dialogRef.close();
  }
}
