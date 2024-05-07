import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CardComponent]
})
export class AppComponent {
  
  posts= [
    { 
      title: "Neat Tree",
      imageUrl: "../assets/images/tree.jpeg",
      username: "nature",
      content: "Saw this tree during my hike today."
    },
    {
      title: "Snowy Mountain",
      imageUrl: "../assets/images/mountain.jpeg",
      username: "mountainlover",
      content: "Here is a picture of a snowy montain."
    },
    {
      title: "Mountain BIKING",
      imageUrl: "../assets/images/biking.jpeg",
      username: "biking12222",
      content: "I did some biking today."
    },
  ];
}
