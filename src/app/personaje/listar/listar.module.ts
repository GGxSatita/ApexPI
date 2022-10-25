import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ListarPageRoutingModule } from './listar-routing.module';

import { ListarPage } from './listar.page';
import { ApiPersonajeService } from '../services/api-personaje.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ListarPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ListarPage],
  providers : [ApiPersonajeService]
})
export class ListarPageModule {}
