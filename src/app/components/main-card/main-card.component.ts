import { Component, Input, OnInit } from '@angular/core';
import { CommentSchema } from 'src/app/schemas/comment.schema';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit{
  @Input()  id: number = 1;
  @Input()  author: string = '';
  @Input()  title: string = '';
  @Input()  description: string = '';
  @Input()  image825: string = '';
  @Input()  image1800: string = '';
  @Input()  hash: string[] = [];
  @Input()  comments: CommentSchema[] = [];

  constructor() {}

  ngOnInit(): void {
    const hashTags = this.hash.map((string) => `#${string} `).join('');
    this.hash = [hashTags];
  }
}
