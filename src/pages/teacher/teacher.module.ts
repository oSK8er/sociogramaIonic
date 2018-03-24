import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { TeacherPage } from './teacher';

@NgModule({
  declarations: [
    TeacherPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherPage),
    TranslateModule.forChild()
  ],
  exports: [
    TeacherPage
  ]
})
export class TeacherPageModule { }