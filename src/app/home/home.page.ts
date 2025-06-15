import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonContent, IonCard, IonIcon, IonFooter } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { linkSharp, logoWhatsapp } from 'ionicons/icons';

addIcons({ 'link-sharp': linkSharp, 'logo-whatsapp': logoWhatsapp});

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonFooter, IonIcon, IonCard, IonHeader, IonContent, NgFor],
})
export class HomePage {
  constructor() {}
  itens = ['item1', 'item2', 'item3', 'item4'];

  getWhatsAppLink(item: any): string {
  const msg = `Olá, quero ajudar vocês comprando esse ${item.item}`;
  const encodedMsg = encodeURIComponent(msg);
  return `https://wa.me/5521975616399?text=${encodedMsg}`;
  }

}
