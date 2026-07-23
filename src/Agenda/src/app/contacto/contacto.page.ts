import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { AccesoService } from '../services/acceso.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class ContactoPage {


  nombre = '';
  telefono = '';
  correo = '';


  constructor(
    private acceso: AccesoService,
    private navCtrl: NavController
  ) { }



  agregar(){


    const contacto = {

      nombre: this.nombre,
      telefono: this.telefono,
      correo: this.correo

    };


    console.log(contacto);


    this.acceso.postData(
      'Contactos/agregar',
      contacto
    )
    .subscribe({

      next:(respuesta:any)=>{


        this.acceso.showToast(
          respuesta.mensaje
        );


        this.navCtrl.navigateBack('/contactos');


      },


      error:(error:any)=>{

        console.log(error);

        this.acceso.showToast(
          'Error al agregar contacto'
        );

      }


    });


  }


}