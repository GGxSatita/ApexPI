import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPageRoutingModule } from './agregar-routing.module';

import { AgregarPage } from './agregar.page';
import { ApiPersonajeService } from '../services/api-personaje.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AgregarPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AgregarPage],
  providers:[ApiPersonajeService]
})
export class AgregarPageModule {}
