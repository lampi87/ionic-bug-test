import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    CONSOLE = 'HomePage';

    constructor() { }

    ngOnInit() {
        console.log(this.CONSOLE, 'NgOnInit');
    }

    ionViewWillEnter() {
        console.log(this.CONSOLE, 'IonViewWillEnter');
    }

    ionViewDidEnter() {
        console.log(this.CONSOLE, 'IonViewDidEnter');
    }

    ionViewWillLeave() {
        console.log(this.CONSOLE, 'IonViewWillLeave');
    }
}
