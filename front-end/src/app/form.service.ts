import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  url = 'http://localhost:8080/stars';

  constructor( private http: HttpClient ) { }
  saveValues(data:any) {
    console.log(data)
    let headers = new HttpHeaders({'Content-Type' : 'application/json'});
    let options = {headers: headers};
    return this.http.post<any>(this.url, JSON.stringify(data), options)
  }
}
