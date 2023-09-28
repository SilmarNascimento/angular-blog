import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from 'src/app/data/fakeData';
import { ArticleSchema } from 'src/app/schemas/article.schema';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  type: 'mainCard' | 'sideCard' | null  = null;
  id: number = 0;
  article: ArticleSchema | null = null;
  hash: string[] = [];
  contentText: string[] | null = null;
  comments: string[][] | null = null;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      const id = value.get('id');
      const type = value.get('type');
      if(id && (type === 'mainCard' || type === 'sideCard')) {
        this.type = type;
        this.id = parseInt(id, 0);
        this.article = (fakeData[this.type] || [])
          .find((article: ArticleSchema) => article.id === this.id) || null;

        this.getHashTag();
        this.getContentText();


        //this.comments = this.article?.comments;
      }
    });
  }

  getHashTag() {
    const hashTags = (this.article?.hash ?? [])
          .map((string) => `#${string} `).join('');
    this.hash = [hashTags];
  }
  getContentText() {
    this.contentText = (this.article?.contentText ?? '').split("\n");
  }
  getComments() {

  }
}
