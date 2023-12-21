import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeaponService } from '../../service/weapon.service';
import { WeaponDTO } from 'src/app/model/weaponDTO/weapon-dto.model';
import { Categorie } from 'src/app/model/categorie/categorie.model'; // Update the path

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { Weapon } from 'src/app/model/weapon/weapon.model';
import { CatalogService } from 'src/app/service/catalog/catalog.service';
import { Catalog } from 'src/app/model/catalog/catalog.model';

@Component({
  selector: 'app-popin',
  standalone: false,
  templateUrl: './popin.component.html',
  styleUrl: './popin.component.css',
})
export class PopinComponent {
  public createForm: FormGroup;
  public catalog: Catalog = Object.create(null);
  isLoading: boolean | undefined;
  public categories: Categorie[] = []; // Array to store categories
  public weapon: Weapon;
  constructor(
    public formBuilder: FormBuilder,
    private catalogueService: CatalogService,
    public dialogRef: MatDialogRef<PopinComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private weaponService: WeaponService
  ) {
    this.weapon = data.weapon;
    this.createForm = this.formBuilder.group({
      name: '',
      price: '',
    });
  }

  submit() {
    const formData = this.createForm.value;
    const weaponInstance = new WeaponDTO({
      name: this.createForm.value.name,
      price: this.createForm.value.price,
    });
    console.log('Weapon created successfully:', weaponInstance);

    this.weaponService
      .updateWeapon(this.weapon.weaponId, weaponInstance)
      .subscribe((response) => {
        location.reload();
        this.catalogueService.getCatalog().subscribe(
          (catalogBack: any) => {
            this.catalog = new Catalog(catalogBack);
            this.isLoading = false;
            this.dialogRef.close();
            console.log('Weapon created successfully:', response);
            // Add any confirmation logic here
          },
          (error) => {
            console.error('Error creating weapon:', error);
            // Handle the error as needed
          }
        );
      });
  }
}
export class DialogNoteExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogNoteExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: PopinComponent
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
