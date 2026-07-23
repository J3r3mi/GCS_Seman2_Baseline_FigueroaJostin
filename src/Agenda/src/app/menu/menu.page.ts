
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    CommonModule,
    FormsModule
  ]
})
export class MenuPage {


  constructor(
    private navCtrl: NavController
  ) {}


  irContactos(){

    this.navCtrl.navigateForward('/contactos');

  }

}