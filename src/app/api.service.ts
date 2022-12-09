import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchBook=()=>
  {
    return this.http.get("http://localhost:8080/view")
  }

  addBook=(dataTosend:any)=>
  {
    return this.http.post("http://localhost:8080/entry",dataTosend)
  }
  searchBook=(dataTosend:any)=>
  {
    return this.http.post("http://localhost:8080/search",dataTosend)
  }
  deleteBook=(dataTosend:any)=>
  {
    return this.http.post("http://localhost:8080/delete",dataTosend)
  }
  addUser=(dataTosend:any)=>
  {
    return this.http.post("http://localhost:8080/register",dataTosend)
  }
 
}
