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

@Component({
  selector: 'app-popin',
  standalone: false,
  templateUrl: './popin.component.html',
  styleUrl: './popin.component.css'
})
export class PopinComponent {

    public createForm: FormGroup;
    public categories: Categorie[] = []; // Array to store categories
  
    constructor(
      public formBuilder: FormBuilder,
      private weaponService: WeaponService
    ) {
      this.createForm = this.formBuilder.group({
        name: '',
        price: '',
      });
    }
  
    submit() {
      const weaponInstance = new WeaponDTO({
        name: this.createForm.value.name,
        price: this.createForm.value.price,
      });
      console.log('Weapon created successfully:', weaponInstance);
  
      this.weaponService.updateWeapon(this.createForm.value.weaponId,weaponInstance).subscribe(
        (response) => {
          console.log('Weapon created successfully:', response);
          // Add any confirmation logic here
        },
        (error) => {
          console.error('Error creating weapon:', error);
          // Handle the error as needed
        }
      );
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
  
  