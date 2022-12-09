import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(private api:ApiService){}
  name=""
  aadhar=""
  address=""
  pincode=""
  dob=""
  email=""
  phone=""
  username=""
  password=""
  confirm=""

  readValue=()=>
  {
  let data:any={
  
    "name":this.name,"aadhar":this.aadhar,"address":this.address,"pincode":this.pincode,"dob":this.dob,"email":this.email,
    "phone":this.phone,"username":this.username,"password":this.password,"confirm":this.confirm

  }
  console.log(data)
  this.api.addUser(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.status=="success") {
        alert("user registered successfully")
        this.aadhar=""
        this.address=""
        this.confirm=""
        this.dob=""
        this.email=""
        this.name=""
        this.password=""
        this.phone=""
        this.pincode=""
        this.username=""
      } else {
        alert("something went wrong")
      }
    }
  )
  }

}
