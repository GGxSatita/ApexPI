import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Personaje } from '../modelo/personaje';
import { Observable } from 'rxjs';

@Injectable()

export class ApiPersonajeService {

  private API_PERSONAJE = 'http://localhost:3000/personajes';

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


}
