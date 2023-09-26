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
  date: string = '';
  @Input()
  description: string = '';
  @Input()
  image: string = '';
  @Input()
  contentText: string = '';
  @Input()
  hash: string = '';
  @Input()
  comments: CommentSchema[] = [];
}
