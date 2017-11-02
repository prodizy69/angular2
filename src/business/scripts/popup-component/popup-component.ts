import { Component, Input } from '@angular/core';
@Component({
    selector: 'popup-comp',
    templateUrl: 'business/scripts/popup-component/popup-component.html',
    styleUrls: ['business/scripts/popup-component/popup-component.css']
})
export class PopupComponent {
    @Input()
    show: boolean;
    constructor() {
        console.log('Show', this.show);
    }

}
