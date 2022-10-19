import { ChangeDetectorRef, Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StateService } from './app.state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoading$: Observable<Boolean>;

  constructor(private appStateService: StateService,
    private cdref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.isLoading$ = this.appStateService.state.pipe(map(state => state.isLoading));
  }

  ngAfterViewChecked() {
    this.cdref.detectChanges();
  }
}
