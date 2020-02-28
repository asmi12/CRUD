import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

constructor(private http : HttpClient) { }
url="http://localhost:3000"

getStudent(){
  return this.http.get(`${this.url}/students`)
}
createStudent(data){
  return this.http.post(`${this.url}/students`,data)
}
getStudentById(id){
  return this.http.get(`${this.url}/students/${id}`)
}
updateStudent(data,id){
  return this.http.put(`${this.url}/students/${id}`,data)
}
deleteStudent(id){
  return this.http.delete(`${this.url}/students/${id}`)
}
}
