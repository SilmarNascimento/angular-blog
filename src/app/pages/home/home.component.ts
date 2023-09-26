import { Component, OnInit } from '@angular/core';
import { fakeData } from 'src/app/data/fakeData';
import { ArticleSchema } from 'src/app/schemas/article.schema';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  mainArticles: ArticleSchema[] = [];
  sideArticles: ArticleSchema[] = [];

  constructor() {}

  ngOnInit(): void {
    this.mainArticles = fakeData.mainCard;
    console.log(this.mainArticles[0].comments);

    this.sideArticles = fakeData.sideCard;
  }
}
