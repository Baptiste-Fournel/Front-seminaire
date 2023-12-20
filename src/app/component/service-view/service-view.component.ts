import {Component, Input, signal} from '@angular/core';
import {Catalog} from "../../model/catalog/catalog.model";
import {Weapon} from "../../model/weapon/weapon.model";
import {MatDialog} from '@angular/material/dialog';
import { PopinComponent } from 'src/app/component/popin/popin.component';

@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.css']
})
export class ServiceViewComponent {

  @Input()
  public catalog : Catalog = Object.create(null);

  constructor(public dialog: MatDialog) {}

  displayedColumns: Array<string> = ["nom", "price", "action"];

  createProduct (){
    //todo
  }


  openPopin(weapon : Weapon): void {
    const dialogRef = this.dialog.open(PopinComponent, {
    data : {weapon : weapon}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
