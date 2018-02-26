import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CargarModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cargar-modal',
  templateUrl: 'cargar-modal.html',
})
export class CargarModalPage {
  detalles: any = [
    {
      titulo: '',
      subtitulo: '',
      parrafo: '',
      items: []
    }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewWillLoad() {
    this.detalles = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CargarModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  cargar() {
    this.viewCtrl.dismiss();
  }

}
