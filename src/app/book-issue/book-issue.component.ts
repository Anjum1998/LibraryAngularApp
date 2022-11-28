import { Component } from '@angular/core';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent {

  name=""
  title=""
  date=""
  membershipno=""

  readValue=()=>
  {
    let data:any= {
      "name":this.name,"title":this.title,"date":this.date,"membershipno":this.membershipno
    }
    console.log(data)
  }

}
