import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage: string = 'shopping-list';

  public showPage(page: string) {
    this.currentPage = page;
  }

  public isMyPage(page: string) {
    return this.currentPage === page;
  }
}
