import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccesoService } from '../services/acceso.service';


@Component({
  selector: 'app-rclave',
  templateUrl: './rclave.page.html',
  styleUrls: ['./rclave.page.scss'],
  standalone:true,
  imports:[
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class RclavePage {


cedula='';
contrasena='';


constructor(
 private acceso:AccesoService
){}



recuperar(){


  if(!this.validarClave(this.contrasena)){


    this.acceso.showToast(
      'La contraseña debe tener mayúscula, minúscula, número y signo especial'
    );


    return;

  }



  const usuario={

    cedula:this.cedula,
    contrasena:this.contrasena

  };



  this.acceso.postData(
    'Usuarios/recuperar',
    usuario

  )
  .subscribe({


    next:(respuesta:any)=>{


      this.acceso.showToast(
        respuesta.mensaje
      );


    },


    error:(error:any)=>{


      console.log(error);


      this.acceso.showToast(
        error.error.mensaje
      );


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