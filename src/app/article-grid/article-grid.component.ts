import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../interface/interface';

@Component({
  selector: 'app-article-grid',
  templateUrl: './article-grid.component.html',
  styleUrls: ['./article-grid.component.scss']
})
export class ArticleGridComponent implements OnInit {

  @Input() article: Article;

  constructor() { }

  ngOnInit(): void {
  }

}
