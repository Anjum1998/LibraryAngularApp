import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {

  title=""
  author=""
  desription=""
  publisher=""
  language=""
  releaseyear=""
  distributor=""
  price=""
  image=""


  readValue=()=>
  {
    let data:any={
      "title":this.title,
      "image":this.image,
      "desription":this.desription,
      "author":this.author,
      "price":this.price,
      "publisher":this.publisher,
      "language":this.language,
      "releaseyear":this.releaseyear,
      "distributor":this.distributor
      

    }
    console.log(data)
  }


}
