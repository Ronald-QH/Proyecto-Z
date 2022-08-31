import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  isOpen: boolean = false;
  @Input() title: string | undefined;
  @Input() img: string | undefined;
  @Input() description: string | undefined;
  @Input() link: string | undefined;


  constructor() { }
  ngOnInit() {
  }

}
