import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {

  title=""
  author=""
  description=""
  publisher=""
  language=""
  releaseyear=""
  distributor=""
  price=""
  image=""
constructor(private api:ApiService){}

  readValue=()=>
  {
    let data:any={
      "title":this.title,
      "image":this.image,
      "description":this.description,
      "author":this.author,
      "price":this.price,
      "publisher":this.publisher,
      "language":this.language,
      "releaseyear":this.releaseyear,
      "distributor":this.distributor
      

    }
    console.log(data)
    this.api.addBook(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("successfully added")
        } else {
          alert("something wrong!")
        }
      }
    )
  }


}
