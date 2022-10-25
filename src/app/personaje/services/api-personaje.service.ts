import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Personaje, PersonajeConID } from '../modelo/personaje';
import { Observable, BehaviorSubject} from 'rxjs';

@Injectable()

export class ApiPersonajeService {

  private API_PERSONAJE = 'http://localhost:3000/personajes';
  private comportamientoListar = new BehaviorSubject<Array<PersonajeConID>>([]);
  public listarPersonaje$ = this.comportamientoListar.asObservable();
  private paginaActual = 1;

  constructor(
    private cliente : HttpClient
  ) { }

  public agregarPersonaje(nuevoPersonaje : Personaje) : Observable<any>{
    return this.cliente.post(this.API_PERSONAJE, nuevoPersonaje, {
      headers : {
        'Contente-Type' : 'aplication/json; charset=utf-8'
      }
    })


  }

  public listarPersonajesPrimeros(){
    this.cliente.get<Array<PersonajeConID>>(`${this.API_PERSONAJE}?_page=1&_limit=4`)
    .subscribe(datos => {
      this.paginaActual = this.paginaActual + 1;
      this.comportamientoListar.next(datos);
    })
  }
  public obtenerMasPersonajes(){
    this.cliente.get<Array<PersonajeConID>>(`${this.API_PERSONAJE}?_page=${this.paginaActual}&_limit=4`)
    .subscribe(datos => {
      if(datos){
        this.paginaActual = this.paginaActual + 1;
        this.comportamientoListar.next(this.comportamientoListar.getValue().concat(datos));
      }
    })
  }
}
