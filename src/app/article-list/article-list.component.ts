import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StateService } from '../app.state.service';
import { AppState, Article } from '../interface/interface';
import { ArticleListService } from './article-list.service';
import { ArticleListStateService } from './article-list.state.service';
import { ChangeDetectorRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  animations: [
    trigger("myTrigger", [
      state(
        "fadeInFlash",
        style({
          opacity: "1"
        })
      ),
      transition("void => *", [
        style({ opacity: "0", transform: "translateY(20px)" }),
        animate("500ms")
      ])
    ])
  ]
})
export class ArticleListComponent {
  articles: Article[] = [];
  isMore: Boolean;
  hasMore$: Observable<Boolean>;
  isLoadMore$: Observable<Boolean>;
  throttle = 500;
  distance = 1;
  state: string = "fadeInFlash";
  
  constructor(private articleListService: ArticleListService,
    private appStateService: StateService,
    private listStateService: ArticleListStateService) { }

  ngAfterViewInit(): void {
    this.isLoadMore$ = this.listStateService.state.pipe(map(state => state.isLoading));
    this.hasMore$ = this.listStateService.state.pipe(map(state => state.hasMore));
    this.initItems();
  }

  initItems() {
    this.listStateService.setLoading(true);
    this.appStateService.setLoading(true);
    this.articleListService.loadItems().valueChanges.subscribe(({ data: { articles } }: any) => {
      if (articles.length > 0) {
        articles.forEach((article: Article) => {
          this.articles.push(article)
        });
      }
      this.listStateService.setLoading(false);
      this.appStateService.setLoading(false);
    })
  }

  onScroll() {
    this.hasMore$.subscribe(x => this.isMore = x);

    if (this.isMore) {
      this.listStateService.setLoading(true);
      this.articleListService.loadItems().valueChanges.subscribe(({ data: { articles } }: any) => {
        if (articles.length > 0) {
          articles.forEach((article: Article) => {
            this.articles.push(article)
          });
        } else {
          this.listStateService.setLoadMore(false);
        }
        this.listStateService.setLoading(false);
      })
    }
  }
}
