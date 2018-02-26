import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the IniciarPedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iniciar-pedido',
  templateUrl: 'iniciar-pedido.html',
})
export class IniciarPedidoPage {
  clientes: any = [];
  clientesSeleccionados: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IniciarPedidoPage');
    this.clientes = [
      {
        id: 12345,
        nombre: 'Jonnathan'
      }, {
        id: 6789,
        nombre: 'Birobid'
      }
    ]
  }

  getCliente(e: any) {
    this.clientesSeleccionados = [];
    let busqueda = e.target.value;
    if (busqueda && busqueda.trim() != '') {
      for (let i = 0; i < this.clientes.length; i++) {
        if(busqueda.toLowerCase() == this.clientes[i].nombre.toLowerCase()) {
          this.clientesSeleccionados.push(this.clientes[i]);
        }
      }
    }
  }

}
