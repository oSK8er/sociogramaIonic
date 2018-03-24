import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-teacher',
  templateUrl: 'teacher.html'
})

export class TeacherPage{
    constructor (public navCtrl: NavController) {
    }
    startApp() {  //TODO teacher2
        this.navCtrl.setRoot('WelcomePage', {}, {
          animate: true,
          direction: 'forward'
        });
      }
}
