import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    @Output() navClick = new EventEmitter<string>();

    public showPage(page: string) {
        this.navClick.emit(page);
    }
}
