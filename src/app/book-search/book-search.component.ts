import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
  title=""
constructor(private api:ApiService){}
searchData:any=[]
 

  readValue=()=>
  {
    let data:any= {
      "title":this.title
    }
    console.log(data)
    this.api.searchBook(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.length==0) {
          alert("invalid booktitle")
        } else {
          this.searchData=response
        }
      }
    )
  }
  deleteBtnClick=(id:any)=>
  {
    let data:any={"id":id}
    this.api.deleteBook(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("deleted successfully")
        } else {
          alert("can not delete")
        }
      }
    )
  }

}
