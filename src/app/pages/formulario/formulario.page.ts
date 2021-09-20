import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  usuario = {
    nombre:'',
    edad:'',
    email:'',
    password:'',
    genero:''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
}
