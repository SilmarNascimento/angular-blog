import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  @Input() comment: string = '';
  @Input() author: string = '';
  paragraphs: string[] = [];

  ngOnInit(): void {
    this.paragraphs = this.comment.split('\n');
  }
}
