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
  date: string = '';
  description: string = '';
  image: string = '';
  contentText: string = '';
  hash: string = '';
  comments: CommentSchema[] = [];
}
