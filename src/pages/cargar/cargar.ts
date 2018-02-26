import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

/**
 * Generated class for the CargarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cargar',
  templateUrl: 'cargar.html',
})
export class CargarPage {
  envios: any = [];

  constructor(
    public navCtrl: NavController,
    public modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CargarPage');
    this.envios = [
      {
        titulo: 'Carga de Clientes',
        subtitulo: 'Otro título de ser necesario',
        parrafo: 'Carga de la información de los clientes, vendedores, grupos y tipos de clientes y las rutas',
        items: [
          {
            titulo: 'Alberto',
            nota: 'Es un cliente que paga a tiempo'
          }, {
            titulo: 'Carlos',
            nota: 'Es un cliente que paga a tiempo'
          }, {
            titulo: 'Juan',
            nota: 'Es un cliente que paga a tiempo'
          }
        ]
      }, {
        titulo: 'Carga de Productos y Stock',
        subtitulo: 'Otro título de ser necesario',
        parrafo: 'arga de información de los productos, de las condiciones comerciales, grupos de productos y el stock actualizado',
        items: [
          {
            titulo: 'Producto 1',
            nota: 'Descripción producto 1'
          }, {
            titulo: 'Producto 2',
            nota: 'Descripción producto 2'
          }, {
            titulo: 'Producto 3',
            nota: 'Descripción producto 3'
          }
        ]
      }, {
        titulo: 'Cargar Cartera',
        subtitulo: 'Otro título de ser necesario',
        parrafo: 'Carga la cartera o deuda vigente de los clientes',
        items: [
          {
            titulo: 'Cartera 1',
            nota: 'Descripción cartera 1'
          }, {
            titulo: 'Cartera 2',
            nota: 'Descripción cartera 2'
          }, {
            titulo: 'Cartera 3',
            nota: 'Descripción cartera 3'
          }
        ]
      }, {
        titulo: 'Cargar Total',
        subtitulo: 'Otro título de ser necesario',
        parrafo: 'Carga la información completa',
        items: [
          {
            titulo: 'Total 1',
            nota: 'Descripción total 1'
          }, {
            titulo: 'Total 2',
            nota: 'Descripción total 2'
          }, {
            titulo: 'Total 3',
            nota: 'Descripción total 3'
          }
        ]
      }, {
        titulo: 'Cargar de ransferencia',
        subtitulo: 'Otro título de ser necesario',
        parrafo: 'Carga de transferencia',
        items: [
          {
            titulo: 'Transferencia 1',
            nota: 'Descripción transferencia 1'
          }, {
            titulo: 'Tranferencia 2',
            nota: 'Descripción transferencia 2'
          }, {
            titulo: 'Transferencia 3',
            nota: 'Descripción transferencia 3'
          }
        ]
      }, {
        titulo: 'Reiniciar Stock Autoventa',
        subtitulo: 'Otro título de ser necesario',
        parrafo: 'Reiniciar Stock Autoventa',
        items: []
      }
    ]
  }

  openModal(datos) {
    const modalDetalle = this.modal.create('CargarModalPage', {data: datos});
    modalDetalle.present();
  }

}
