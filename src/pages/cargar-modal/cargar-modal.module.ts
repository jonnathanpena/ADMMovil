import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CargarModalPage } from './cargar-modal';

@NgModule({
  declarations: [
    CargarModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CargarModalPage),
  ],
})
export class CargarModalPageModule {}
