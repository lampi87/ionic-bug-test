import { Component } from '@angular/core';

import { Platform, AlertController, NavController } from '@ionic/angular';
import { Globalization } from '@ionic-native/globalization/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { TranslateService } from '@ngx-translate/core';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'HOME.TITLE',
      url: '/tabs',
      icon: 'home'
    }
  ];

  CONSOLE = 'AppComponent';
  versionCode = '0.0.1';

  constructor(
    private appVersion: AppVersion,
    private globalization: Globalization,
    private keyboard: Keyboard,
    private navCtrl: NavController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private translate: TranslateService
  ) {
    console.log(this.CONSOLE, 'Constructor');
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log(this.CONSOLE, 'InitializeApp platform ready');
      this.splashScreen.show();
      this.keyboard.hideFormAccessoryBar(false);
      this.translate.setDefaultLang('en');
      this.appVersion.getVersionNumber().then(res => {
        console.log(this.CONSOLE, 'AppVersion' , JSON.stringify(res));
        this.versionCode = res;
      }).catch(error => {
        console.error(this.CONSOLE, 'AppVersion failed', JSON.stringify(error));
      });
      this.navCtrl.navigateRoot('/tabs/home');
      this.splashScreen.hide();
    });
  }
}
