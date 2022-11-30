import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrator-login',
  templateUrl: './administrator-login.component.html',
  styleUrls: ['./administrator-login.component.css']
})
export class AdministratorLoginComponent {

  username=""
  password=""
  
  constructor(private router:Router){}

  readValue=()=>
  {
    let data:any={

      "username":this.username,"password":this.password
    }
    console.log(data)

    if (this.username=="admin"&& this.password=="12345") {
        this.router.navigate(['/entry'])
    } else {
        alert("invalid credentials")
    }
  }
 


}
