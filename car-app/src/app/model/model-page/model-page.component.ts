import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Car} from "../../domain/car";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-model-page',
  templateUrl: './model-page.component.html',
  styleUrls: ['./model-page.component.less'],
  providers: [HttpService]
})
export class ModelPageComponent implements OnInit {

  id: number;
  car!: Car;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.httpService.getOneCar(this.id).subscribe(data => {
      this.car = data;
    })
  }
}
