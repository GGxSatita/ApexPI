import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiPersonajeService } from '../services/api-personaje.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  public formulario : FormGroup;
  public habilidades : Array<string> = [

      'Visión',
      'Curación',
      'Movimiento',
      'Rotación',
      'Ataque',
      'Soporte',
  ];
  public sexualidad : Array<string> = [
    'Gay',
    'Bisexual',
    'Asexual',
    'No binario',
    'Pansexual',
    'Lesbiana',
    'Transgenero',
    'Heterosexual',
  ]

  public imagenBase : '';

  constructor(
    private fb : FormBuilder,
    private apiPersonaje : ApiPersonajeService
  ) {
    this.crearFormulario();
   }
   public crearFormulario(){
    this.formulario = this.fb.group({
      nombre: new FormControl('', [Validators.minLength(3), Validators.maxLength(15)]),
      foto : new FormControl('', Validators.required),
      planeta : new FormControl('', [Validators.minLength(3), Validators.maxLength(15)]),
      habilidades : new FormControl('', Validators.required),
      edad : new FormControl(0, Validators.required),
      frase : new FormControl ('', [Validators.minLength(3), Validators.maxLength(100)]),
      sexualidad : new FormControl('No especifica', [Validators.required])
    })
   }

  ngOnInit() {
  }

  public campo(control : string){
    return this.formulario.get(control);
  }
  public tocado(control: string){
    return this.formulario.get(control).touched;
  }

  public leerArchivo(evento : Event){
    const archivo = (evento.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.readAsDataURL(archivo);
    reader.onload = () => {
      console.log(reader.result);
    }
  }
}
