export interface Personaje {
  nombre : string;
  foto : string ;
  planeta : string;
  habilidad : Array <string>;
  edad : number;
  frase : string ;
  sexualidad : string ;
}

export interface PersonajeConID extends Personaje {
  id: string;
}

export interface PersonajeParcial extends Partial<Personaje>{

}
