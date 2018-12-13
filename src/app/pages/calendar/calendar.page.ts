import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, Events } from '@ionic/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  CONSOLE = 'CalendarPage';
  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  selectedDate: any;
  selectedEventList: any[] = [];

  constructor(private events: Events,
    private navCtrl: NavController,
    private zone: NgZone) { }

  ngOnInit() {
    console.log(this.CONSOLE, 'NgOnInit');
  }

  ionViewWillEnter() {
    console.log(this.CONSOLE, 'IonViewWillEnter');
    this.date = new Date();
    this.monthNames = ['APP.MONTH.JAN', 'APP.MONTH.FEB', 'APP.MONTH.MAR', 'APP.MONTH.APR', 'APP.MONTH.MAY',
    'APP.MONTH.JUN', 'APP.MONTH.JUL', 'APP.MONTH.AUG', 'APP.MONTH.SEP', 'APP.MONTH.OCT', 'APP.MONTH.NOV',
    'APP.MONTH.DEC'];
    this.getDaysOfMonth();
    this.refreshData();
  }

  ionViewDidEnter() {
    console.log(this.CONSOLE, 'IonViewDidEnter');
    this.events.subscribe('dayplan_update', (data) => {
      console.log(this.CONSOLE, 'Event Dayplan_update');
      this.zone.run(() => {
        this.refreshData();
      });
    });
    this.events.subscribe('user_update', (data) => {
      console.log(this.CONSOLE, 'Event User_update');
      this.zone.run(() => {
        this.refreshData();
      });
    });
  }

  ionViewWillLeave() {
    console.log(this.CONSOLE, 'IonViewWillLeave');
    this.events.unsubscribe('dayplan_update');
    this.events.unsubscribe('user_update');
  }

  refreshData() {
    console.log(this.CONSOLE, 'RefreshData');
    this.selectDate(this.date.getDate());
  }

  getDaysOfMonth() {
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear();
    if (this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
    } else {
      this.currentDate = 999;
    }

    const firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    const prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    for (let i = prevNumOfDays - (firstDayThisMonth - 2); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push(i);
    }

    const thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    for (let i = 0; i < thisNumOfDays; i++) {
      this.daysInThisMonth.push(i + 1);
    }

    const lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
    for (let i = 0; i < (7 - lastDayThisMonth); i++) {
      this.daysInNextMonth.push(i + 1);
    }
    const totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
    if (totalDays < 36) {
      for (let i = (7 - lastDayThisMonth); i < ((7 - lastDayThisMonth) + 7); i++) {
        this.daysInNextMonth.push(i);
      }
    }
  }

  goToLastMonth() {
    this.selectedDate = 0;
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
    this.selectDate(0);
  }

  goToNextMonth() {
    this.selectedDate = 0;
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
    this.getDaysOfMonth();
    this.selectDate(0);
  }

  checkDoneEvent(day): boolean {
    return false;
  }

  checkAbortEvent(day): boolean {
    return false;
  }

  selectDate(day) {
    console.log(this.CONSOLE, 'SelectDate', JSON.stringify(day));
    this.selectedDate = day;
    this.selectedEventList = [];
  }

}
