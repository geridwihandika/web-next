import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ProdusenModel } from './produsen.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdusenService {

  constructor(private http: HttpClient) { 

  }

  list() {
    return this.http.get<ProdusenModel[]>( `${environment.baseUrl}/produsen`)
  }
  create(value : ProdusenModel) {
    return this.http.post<ProdusenModel[]>(`${environment.baseUrl}/produsen/create`, value, {observe: "response"})
  }
}
