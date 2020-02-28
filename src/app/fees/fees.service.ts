import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeesService {
url="http://localhost:3000"
constructor(private http:HttpClient) { }

getFees(){
  return this.http.get(`${this.url}/Fees`)
}
getFeesById(id){
  return this.http.get(`${this.url}/Fees/${id}`)
}
}
