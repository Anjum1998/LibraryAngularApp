import { Component } from '@angular/core';

@Component({
  selector: 'app-administrator-login',
  templateUrl: './administrator-login.component.html',
  styleUrls: ['./administrator-login.component.css']
})
export class AdministratorLoginComponent {

  username=""
  password=""

  readValue=()=>
  {
    let data:any={

      "username":this.username,"password":this.password
    }
    console.log(data)
  }


}
