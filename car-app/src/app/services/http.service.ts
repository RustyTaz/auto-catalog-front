import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Car} from "../domain/car";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>('http://localhost:8080/api/car', httpOptions);
  }
}
