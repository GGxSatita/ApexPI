import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonajeConID } from '../modelo/personaje';
import { ApiPersonajeService } from '../services/api-personaje.service';
import {IonInfiniteScroll} from '@ionic/angular'
@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  public listaPersonajes : Array<PersonajeConID> = [];
  @ViewChild( IonInfiniteScroll)
  public infinito : IonInfiniteScroll;

  constructor(
    private apiPersonajes : ApiPersonajeService
  ) { }

  ngOnInit() {
    this.apiPersonajes.listarPersonaje$.subscribe(datos => {
      this.listaPersonajes = datos;
      if(this.infinito){
        this.infinito.complete();
      }
    });
    this.apiPersonajes.listarPersonajesPrimeros();
  }

  ionViewWillEnter():void {
    console.log('Entrando a la pagina')
    this.apiPersonajes.listarPersonajesPrimeros();
  }

  ionViewDidEnter():void {
    console.log('Ya entró a la pagina')
  }

  public cargarMasDatos(){
    this.apiPersonajes.obtenerMasPersonajes();
  }
}
