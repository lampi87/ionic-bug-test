import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  CONSOLE = 'UserPage';

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
