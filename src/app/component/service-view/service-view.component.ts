import {Component, Input, signal} from '@angular/core';
import {Categorie} from "../../model/categorie/categorie.model";

@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.css']
})
export class ServiceViewComponent {

  @Input()
  public categorie : Categorie = Object.create(null);

  displayedColumns: Array<string> = Object.keys(this.categorie.produits);

  createProduct (){
    //todo
  }

}
