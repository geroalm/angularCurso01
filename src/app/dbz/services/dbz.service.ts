import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor( ) { 
    console.log("Service inicialiado");
    
  }
 private _personajes:Personaje[] =[
    {
      nombre:'Goku',
      poder:9000
    },
    {
      nombre:'vergueta',
      poder:8000
    },
    {
      nombre:'ElCrilin',
      poder:30
    },
    {
      nombre:'ElPicolo',
      poder:2000
    }
  ]


  get personajes():Personaje[] {
    return [...this._personajes];
  }

  agregarPersonaje(unPersonaje:Personaje){
    this._personajes.push(unPersonaje);
  }


}
