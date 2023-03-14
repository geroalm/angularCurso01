import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  borrados: string[] = [];

  heroes: string[] = ["Spiderman","Ironman","Hulk","Thor"]

borrarItem(){
  let borrado:string | undefined;
  borrado = this.heroes.shift();
 
  this.borrados.push(borrado || "");
}

}
