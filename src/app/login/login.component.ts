import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username=""
  password=""

constructor(private router:Router){}

  readValue=()=>
  {
    let data:any= {
      "username":this.username,"password":this.password
    }
    console.log(data)

    if (this.username=="admin"&& this.password=="12345") {
      this.router.navigate(['/view'])
  } else {
      alert("invalid credentials")
  }
  }

}
