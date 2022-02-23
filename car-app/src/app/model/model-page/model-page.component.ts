import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Car} from "../../domain/car";
import {HttpService} from "../../services/http.service";
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-model-page',
  templateUrl: './model-page.component.html',
  styleUrls: ['./model-page.component.less'],
  providers: [HttpService]
})
export class ModelPageComponent implements OnInit {

  id!: number;
  car!: Car;

  constructor(private route: ActivatedRoute, private httpService: HttpService,
              @Inject(MAT_DIALOG_DATA) public data: {id: number},
              public dialogRef: MatDialogRef<ModelPageComponent>) {
    this.id = data.id;
  }

  ngOnInit(): void {
    this.httpService.getOneCar(this.id).subscribe(data => {
      this.car = data;
    })
  }

  onClose(): void {
    this.dialogRef.close();
  }

  editCar() {}

  deleteCar() {
    this.httpService.deleteCar(this.id).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
