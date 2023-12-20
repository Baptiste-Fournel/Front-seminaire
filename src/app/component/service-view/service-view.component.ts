import {Component, Input, signal} from '@angular/core';
import {Catalog} from "../../model/catalog/catalog.model";
import {Weapon} from "../../model/weapon/weapon.model";

@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.css']
})
export class ServiceViewComponent {

  @Input()
  public catalog : Catalog = Object.create(null);

  displayedColumns: Array<string> = ["nom", "price", "action"];

  createProduct (){
    //todo
  }

}
