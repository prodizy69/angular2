import { Directive, AfterViewInit } from '@angular/core';
declare let componentHandler: any;

@Directive({
    selector: '[mdl]'
})
export class MDLDirective implements AfterViewInit {
    ngAfterViewInit() {
        componentHandler.upgradeAllRegistered();
    }
}
