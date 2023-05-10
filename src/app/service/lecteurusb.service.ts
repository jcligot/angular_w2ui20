import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LecteurusbService {

  private device: USBDevice;

  async connect(vendorId: number, productId: number): Promise<void> {
    // Cherche le périphérique USB avec l'ID du vendeur et l'ID du produit spécifiés
    this.device = await navigator.usb.requestDevice({ filters: [{ vendorId, productId }] });

    // Ouvre le périphérique USB
    await this.device.open();

    // Sélectionne la configuration du périphérique
    await this.device.selectConfiguration(1);

    // Réclame une interface du périphérique
    await this.device.claimInterface(0);
  }

  async readData(): Promise<string> {
    // Lit des données à partir du périphérique
    const result = await this.device.transferIn(1, 64);

    // Retourne les données sous forme de chaîne de caractères
    return new TextDecoder().decode(result.data);
  }
}
