import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  constructor() {}
 
  ngOnInit(): void {}

  @Input() title = '';
  @Input() imageUrl = '';
  @Input() username = '';
  @Input() content = '';
}
