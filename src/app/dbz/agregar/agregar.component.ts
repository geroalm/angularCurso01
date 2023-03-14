import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
 // @Output() nuevoEvent:EventEmitter<Personaje> = new EventEmitter;

 constructor(private service: DbzService){}

 

  @Input() nuevoPersonaje:Personaje={
    nombre:"",
    poder:0
  }

  agregar() {
    if(this.nuevoPersonaje.nombre.trim().length===0){
      return;
    }

    this.service.agregarPersonaje(this.nuevoPersonaje);
    //this.nuevoEvent.emit(this.nuevoPersonaje);
    this.nuevoPersonaje={
      nombre:'',
      poder:0
    }
  
  console.log(this.nuevoPersonaje);
  
  }
}
