import { Component } from '@angular/core';

interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      icon: 'earth-outline',
      name: 'Puntos limpios',
      redirecTo: '/descripcion'
    },
    {
      icon: 'body-outline',
      name: 'Regístrate',
      redirecTo: '/formulario'
    },
  ];
}
