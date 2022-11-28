import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

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
  }

}
