import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular/standalone';
import { AccesoService } from '../services/acceso.service';
import { RegistroPage } from '../registro/registro.page';
import { RclavePage } from '../rclave/rclave.page';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton
  ]
})
export class HomePage {

  cedula = '';
  contrasena = '';

  constructor(
    private navCtrl: NavController,
    private acceso: AccesoService,
    private modalCtrl: ModalController
  ) { }

  ingresar() {

  const datos = {

    cedula: this.cedula,
    contrasena: this.contrasena

  };


  console.log(datos);


  this.acceso.postData('Usuarios/login', datos)
  .subscribe({

    next: async (respuesta: any) => {

      console.log(respuesta);

      await this.acceso.createSession(
        'usuario',
        JSON.stringify(respuesta)
      );

      this.acceso.showToast('Bienvenido');

      this.navCtrl.navigateRoot('/menu');

    },


    error: (error) => {

      console.log(error);

      if(error.error?.mensaje){

        this.acceso.showToast(error.error.mensaje);

      }else{

        this.acceso.showToast('Error al iniciar sesión');

      }

    }

  });

}

 async crearCuenta(){

  const modal = await this.modalCtrl.create({

    component: RegistroPage

  });

  await modal.present();

}


  async recuperarClave(){

  const modal = await this.modalCtrl.create({

    component: RclavePage

  });


  await modal.present();

}

}