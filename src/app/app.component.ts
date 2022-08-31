import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
title = 'proyecto-z-front';

categories = [
  {
   "title":"Site A",
   "img":"/web/sitea.png",
   "description": "Lorem Ipsum",
   "link":"http://sitea.com"
  },
  {
    "title":"Site B",
   "img":"/web/sitea.png",
   "description": "Lorem Ipsum",
   "link":"http://sitea.com"
  },
 {
  "title":"Site C",
   "img":"/web/sitea.png",
   "description": "Lorem Ipsum",
   "link":"http://sitea.com"
  }, 
  {
    "title":"Site D",
     "img":"/web/sitea.png",
     "description": "Lorem Ipsum",
     "link":"http://sitea.com"
    },
    {
      "title":"Site E",
       "img":"/web/sitea.png",
       "description": "Lorem Ipsum",
       "link":"http://sitea.com"
      },
      {
        "title":"Site F",
         "img":"/web/sitea.png",
         "description": "Lorem Ipsum",
         "link":"http://sitea.com"
        },
];

//constructor?

}
