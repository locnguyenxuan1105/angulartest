import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { GraphQLModule } from './graphql.module';
import { ArticleGridComponent } from './article-grid/article-grid.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ArticleListComponent },
      { path: 'article', component: ArticleDetailsComponent },
    ]),
    GraphQLModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleDetailsComponent,
    ArticleGridComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
