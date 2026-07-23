import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { AccesoService } from '../services/acceso.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports:[
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class RegistroPage {


  cedula = '';
  nombre = '';
  correo = '';
  contrasena = '';


  constructor(
    private acceso: AccesoService,
    private navCtrl: NavController
  ) {}



  registrar(){


    if(!this.validarClave(this.contrasena)){

      this.acceso.showToast(
        'La contraseña debe tener mayúscula, minúscula, número y signo especial'
      );

      return;

    }


    const usuario = {

      cedula: this.cedula,
      nombre: this.nombre,
      correo: this.correo,
      contrasena: this.contrasena

    };


    this.acceso.postData(
      'Usuarios/registrar',
      usuario
    )
    .subscribe({

      next:(respuesta:any)=>{

        this.acceso.showToast(respuesta.mensaje);

        this.navCtrl.navigateBack('/home');

      },


      error:(error)=>{

        console.log(error);

      }

    });


  }



  validarClave(clave:string){


  const tieneMayuscula = /[A-Z]/.test(clave);

  const tieneMinuscula = /[a-z]/.test(clave);

  const tieneNumero = /[0-9]/.test(clave);

  const tieneEspecial = /[!@#$%^&*]/.test(clave);



  return tieneMayuscula &&
         tieneMinuscula &&
         tieneNumero &&
         tieneEspecial;


 }

}
