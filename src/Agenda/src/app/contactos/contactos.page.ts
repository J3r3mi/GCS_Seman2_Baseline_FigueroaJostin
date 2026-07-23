import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AccesoService } from '../services/acceso.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
  standalone: true,
  imports:[
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ContactosPage implements OnInit {


  contactos:any[] = [];

  usuario:any;

  nombre = '';
  telefono = '';
  correo = '';

  contactoEditar:any = null;


  constructor(
    private acceso: AccesoService
  ) {}


  async ngOnInit(){

  console.log("ENTRO A CONTACTOS");


  const datos = await this.acceso.getSession('usuario');


  this.usuario = JSON.parse(datos!);


  this.listar();

}



  listar(){

    this.acceso.getData(
  'Contactos/listar/' + this.usuario.idUsuario
)
    .subscribe({

      next:(respuesta:any)=>{

        console.log("CONTACTOS RECIBIDOS:", respuesta);

        this.contactos = respuesta;

      },


      error:(error:any)=>{

        console.log("ERROR API:", error);

      }

    });

  }

  agregar(){

  const contacto = {

    nombre: this.nombre,
    telefono: this.telefono,
    correo: this.correo,
    idUsuario: this.usuario.idUsuario

  };


  this.acceso.postData(
    'Contactos/agregar',
    contacto
  )
  .subscribe({

    next:(respuesta:any)=>{

      this.acceso.showToast(
        'Contacto agregado correctamente'
      );


      this.nombre = '';
      this.telefono = '';
      this.correo = '';

      this.listar();

    },


    error:(error:any)=>{

      console.log(error);

      this.acceso.showToast(
        'Error al agregar contacto'
      );

    }

  });

}

editar(contacto:any){

  this.contactoEditar = contacto;

  this.nombre = contacto.nombre;
  this.telefono = contacto.telefono;
  this.correo = contacto.correo;

}

actualizar(){

  const contacto = {

    nombre: this.nombre,
    telefono: this.telefono,
    correo: this.correo

  };


  this.acceso.putData(
    'Contactos/editar/' + this.contactoEditar.idContacto,
    contacto
  )
  .subscribe({

    next:(respuesta:any)=>{

      this.acceso.showToast(
        'Contacto actualizado'
      );


      this.contactoEditar = null;

      this.nombre = '';
      this.telefono = '';
      this.correo = '';


      this.listar();

    },


    error:(error:any)=>{

      console.log(error);

      this.acceso.showToast(
        'Error al actualizar'
      );

    }

  });

}

  eliminar(id:number){

  this.acceso.deleteData(
    'Contactos/eliminar/' + id
  )
  .subscribe({

    next:(respuesta:any)=>{

      this.acceso.showToast(
        'Contacto eliminado'
      );

      this.listar();

    },

    error:(error:any)=>{

      console.log(error);

      this.acceso.showToast(
        'Error al eliminar'
      );

    }

  });

}


}