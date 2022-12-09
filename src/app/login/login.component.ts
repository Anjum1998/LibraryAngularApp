import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email=""
  password=""
  searchUser:any=[]

constructor(private api:ApiService,private router:Router){}

  readValue=()=>
  {
    let data:any= {
      "email":this.email,"password":this.password
    }
    console.log(data)
    this.api.addLogin(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.length==0) {
          alert("invalid")
        } else {
          this.searchUser=response;
          this.router.navigate(['/view'])
        }
      }
    )

    
  }

}
