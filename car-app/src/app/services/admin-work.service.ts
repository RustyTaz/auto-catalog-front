import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Guest} from "../domain/guest";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminWorkService {
  headers:any;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ "Authorization": "Bearer " + localStorage.getItem("auth_token") });
  }

  getGuests(): Observable<Guest[]> {
    return this.http.get<Guest[]>('http://localhost:8080/api/guest',{headers:this.headers })
  }
}
