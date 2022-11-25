import { Component } from '@angular/core';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent {
  books:any = [
    {
      "title":"Circe ",
      "image":"https://img.buzzfeed.com/buzzfeed-static/static/2022-01/21/15/asset/f3c5146d79bc/sub-buzz-6095-1642778910-6.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",
      "desription":"Description :In this feminist retelling of an ancient Greek myth, Circe is exiled to a lonely island when she angers her father Helios.",
      "author":" Madeline Miller",
      "price":256
    },
    {
      "title":"This Savage Song ",
      "image":"https://img.buzzfeed.com/buzzfeed-static/static/2022-01/21/17/asset/4f9944419cc9/sub-buzz-6308-1642785945-24.jpg?downsize=600:*&output-format=auto&output-quality=auto" ,
      "desription":"Description :In this feminist retelling of an ancient Greek myth, Circe is exiled to a lonely island when she angers her father Helios.",
      "author":"Madeline Miller",
      "price":256
    },
    {
      "title":"The Personal Librarian",
      "image":"https://img.buzzfeed.com/buzzfeed-static/static/2022-01/21/17/asset/598a5903de21/sub-buzz-11385-1642785859-16.jpg?downsize=600:*&output-format=auto&output-quality=auto" ,
      "desription":"This novel is based on the real-life story of Belle da Costa Greene: personal librarian to J.P. Morgan",
      "author":"Marie Benedict and Victoria Christopher Murray",
      "price":450
    },
    {
      "title":"The Silence of Bones",
      "image":"https://img.buzzfeed.com/buzzfeed-static/static/2022-01/21/15/asset/6b9bf9fb9bb2/sub-buzz-6487-1642779850-7.jpg?downsize=600:*&output-format=auto&output-quality=auto" ,
      "desription":"In 19th-century Joseon Korea, teenage orphan Seol understands the value of silence and the dangers of curiosity",
      "author":"June Hur",
      "price":350
    },
    {
      "title":"Outlawed",
      "image":"https://img.buzzfeed.com/buzzfeed-static/static/2022-01/21/17/asset/22a49f7b3f10/sub-buzz-6621-1642785753-4.jpg?downsize=600:*&output-format=auto&output-quality=auto" ,
      "desription":"If you get tired of the patriarchy, why not run away and join a gang of feminist outlaws in the Wild West?",
      "author":"Anna Nort",
      "price":500
    },
    {
      "title":"The Lost Apothecary",
      "image":"https://img.buzzfeed.com/buzzfeed-static/static/2022-01/21/17/asset/598a5903de21/sub-buzz-11340-1642784472-18.jpg?downsize=600:*&output-format=auto&output-quality=auto" ,
      "desription":"Dark and deliciously subversive, this historical fiction novel traces the story of Nella",
      "author":"Sarah Penner",
      "price":450
    },
    {
      "title":"The Body in the Library",
      "image":"https://img.buzzfeed.com/buzzfeed-static/static/2022-01/21/17/asset/c3fdc72be0f3/sub-buzz-6558-1642785443-3.jpg?downsize=600:*&output-format=auto&output-quality=auto" ,
      "desription":"Nobody defies the general contempt of spinsterhood quite like Christie’s Miss Marple!",
      "author":"Agatha Christie",
      "price":450
    },
    {
      "title":"Queenie ",
      "image":"https://img.buzzfeed.com/buzzfeed-static/static/2022-01/21/16/asset/4f9944419cc9/sub-buzz-6258-1642784379-6.jpg?downsize=600:*&output-format=auto&output-quality=auto" ,
      "desription":"Following a messy breakup, Queenie enters full rebound mode, and so begins an inevitable sequence of poor decisions.",
      "author":"Candice Carty-Williams",
      "price":7000
    },
    {
      "title":"All Passion Spent" ,
      "image":"https://img.buzzfeed.com/buzzfeed-static/static/2022-01/21/17/asset/598a5903de21/sub-buzz-11359-1642785352-25.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",
      "desription":"All Passion Spent centers on the octogenarian widow Lady Slane, who enjoys a new lease of life when her husband’s death frees her from social expectations",
      "author":"Vita Sackville-West",
      "price":600
    },
    {
      "title":"Kayar",
      "image":"https://m.media-amazon.com/images/I/61Cb1kIoILL.jpg" ,
      "desription":"The novel traces the evolution of the central Travancore society from the early 19th century to the mid-twentieth century",
      "author":"Thakazhi",
      "price":550
    }
  ]

}
