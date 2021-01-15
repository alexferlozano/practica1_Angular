import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  public Nombre: String
  public Apellidos: String
  public Edad: Number
  public Sexo: String
  public persona: PersonaComponent
  constructor() {
    }


  setNombre(nombre:String) {
    this.Nombre=nombre;
  }
  setApellidos(apellidos:String) {
    this.Apellidos=apellidos;
  }
  setEdad(edad:number) {
    this.Edad=edad;
  }
  setSexo(sexo:String) {
    this.Sexo=sexo;
  }
}
