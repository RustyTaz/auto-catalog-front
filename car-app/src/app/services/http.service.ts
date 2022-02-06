import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Car} from "../domain/car";


@Injectable()
export class HttpService{

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>('http://localhost:8080/api/car');
  }

  getOneCar(id: number): Observable<Car> {
    return this.http.get<Car>('http://localhost:8080/api/car/' + id);
  }
}
