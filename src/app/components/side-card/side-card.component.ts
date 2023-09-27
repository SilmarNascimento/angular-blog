import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-card',
  templateUrl: './side-card.component.html',
  styleUrls: ['./side-card.component.css']
})
export class SideCardComponent implements OnInit {
  @Input()  id: number = 1;
  @Input()  author: string = '';
  @Input()  title: string = '';
  @Input()  description: string = '';
  @Input()  image255: string = '';
  @Input()  image825: string = '';
  @Input()  hash: string[] = [];

  constructor() { }

  ngOnInit(): void {
    const hashTags = this.hash.map((string) => `#${string} `).join('');
    this.hash = [hashTags];
  }

}
