import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IniciarPedidoPage } from './iniciar-pedido';

@NgModule({
  declarations: [
    IniciarPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(IniciarPedidoPage),
  ],
})
export class IniciarPedidoPageModule {}
