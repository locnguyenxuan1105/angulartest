import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, map, mergeMap, Observable } from 'rxjs';
import { StateService } from '../app.state.service';
import { Article } from '../interface/interface';
import { ArticleDetailService } from './article-details.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  article: Article;
  isLoading$: Observable<Boolean>;

  constructor(private route: ActivatedRoute,
    private articleDetailService: ArticleDetailService,
    private appStateService: StateService) { }

  ngOnInit(): void {
    var url = this.route.snapshot.queryParams['url'];
    this.isLoading$ = this.appStateService.state.pipe(map(state => state.isLoading));

    this.loadItem(url);
  }

  loadItem(url: string) {
    this.appStateService.setLoading(true);
    this.articleDetailService.loadItem(url).valueChanges.subscribe(({ data: { article }, error }: any) => {
      this.article = article;
      this.appStateService.setLoading(false);
    })
  }

}
