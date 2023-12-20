import {Component, Input, signal} from '@angular/core';
import {Catalog} from "../../model/catalog/catalog.model";
import {Weapon} from "../../model/weapon/weapon.model";
import { WeaponService } from 'src/app/service/weapon.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.css']
})
export class ServiceViewComponent {

  @Input()
  public catalog : Catalog = Object.create(null);
  location: any;
  constructor(private weaponService: WeaponService) {}

  displayedColumns: Array<string> = ["nom", "price", "action","supprimer"];
  
  createProduct (){
    //todo
  }

  supprimer(weaponId: number): void {
  console.log('Supprimer method called with weaponId:', weaponId);
  this.weaponService.deleteWeapon(weaponId).subscribe(
    () => {
      console.log(`Weapon with ID ${weaponId} deleted successfully.`);
      location.reload();

    },
    (error) => {
      console.error('Error deleting weapon:', error);
    }
  );
}

}
