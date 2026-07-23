import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {

  // Cambiaremos esta IP más adelante si es necesario
  servidor = 'https://localhost:7286/api';

  constructor(
    private http: HttpClient,
    private toastController: ToastController
  ) { }

  postData(url: string, body: any) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(
      `${this.servidor}/${url}`,
      body,
      { headers }
    );

  }

  getData(url: string) {

  return this.http.get(
    `${this.servidor}/${url}`
  );

}

deleteData(url:string){

  return this.http.delete(
    `${this.servidor}/${url}`
  );

}

putData(url:string, body:any){

  return this.http.put(
    `${this.servidor}/${url}`,
    body
  );

}

  async showToast(mensaje: string) {

    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top'
    });

    await toast.present();

  }

  async createSession(id: string, valor: string) {

    await Preferences.set({
      key: id,
      value: valor
    });

  }

  async getSession(id: string) {

    const item = await Preferences.get({
      key: id
    });

    return item.value;

  }

  async closeSession() {

    await Preferences.clear();

  }

}