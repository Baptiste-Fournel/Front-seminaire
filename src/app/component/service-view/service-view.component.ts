import {Component, Input, signal} from '@angular/core';
import {Catalog} from "../../model/catalog/catalog.model";
import {Weapon} from "../../model/weapon/weapon.model";
import { WeaponService } from 'src/app/service/weapon.service';
import { Location } from '@angular/common';
import {CatalogService} from "../../service/catalog/catalog.service";

@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.css']
})
export class ServiceViewComponent {

  @Input()
  public catalog : Catalog = Object.create(null);
  location: any;
  isLoading: boolean | undefined;
  constructor(private weaponService: WeaponService, private catalogueService: CatalogService) {}
  

  displayedColumns: Array<string> = ["nom", "price", "action","supprimer"];
  
  createProduct (){
    //todo
  }

  supprimer(weaponId: number): void {
  console.log('Supprimer method called with weaponId:', weaponId);
  this.weaponService.deleteWeapon(weaponId).subscribe(
    () => {
      console.log(`Weapon with ID ${weaponId} deleted successfully.`);
      this.catalogueService.getCatalog().subscribe((catalogBack: any) => {
        this.catalog = new Catalog(catalogBack);
        this.isLoading = false;
      
    },
      (error: any) => {
        console.error('Error loading catalog after deletion:', error);
        this.isLoading = false; // Assurez-vous de gérer l'état de chargement en cas d'erreur
      }),
    (error: any) => {
      console.error('Error deleting weapon:', error);
    }
  });
}

}
