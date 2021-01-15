import { Component } from '@angular/core';
import { PersonaComponent } from './persona/persona.component';

@Component({
  selector: 'app-root',
  templateUrl: './persona/persona.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   persona:PersonaComponent =new PersonaComponent()
   constructor()
   {
    this.persona.setNombre("Humberto")
    this.persona.setApellidos("Abelito")
    this.persona.setEdad(18)
    this.persona.setSexo("Masculino")
   }
   ngOnInit(): void {
  }
}
