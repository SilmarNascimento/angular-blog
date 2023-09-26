import { Component, Input } from '@angular/core';
import { CommentSchema } from 'src/app/schemas/comment.schema';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent {
  @Input()
  id: string = '';
  @Input()
  title: string = '';
  @Input()
  hash: string = '';
  @Input()
  date: string = '';
  @Input()
  image: string = '';
  @Input()
  description: string = '';
  @Input()
  comments: CommentSchema[] = [];
}
