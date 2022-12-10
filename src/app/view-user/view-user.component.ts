import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {
constructor(private api:ApiService){
  this.api.fetchBook().subscribe(
    (response:any)=>
    {
      this.data=response
    }
  )
}
data:any=[]
}
