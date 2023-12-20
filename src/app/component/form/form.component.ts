import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeaponService } from '../../service/weapon.service';
import { WeaponDTO } from 'src/app/model/weaponDTO/weapon-dto.model';
import { Categorie } from 'src/app/model/categorie/categorie.model'; // Update the path

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public createForm: FormGroup;
  public categories: Categorie[] = []; // Array to store categories

  constructor(
    public formBuilder: FormBuilder,
    private weaponService: WeaponService
  ) {
    this.createForm = this.formBuilder.group({
      name: '',
      price: '',
      category: [null], // Initialize category form control
    });
  }

  ngOnInit() {
    this.weaponService.getCategories().subscribe(
      (categories) => {
        this.categories = categories;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  submit() {
    const weaponInstance = new WeaponDTO({
      name: this.createForm.value.name,
      price: this.createForm.value.price,
      categoryId: this.createForm.value.category,
    });
    console.log('Weapon created successfully:', weaponInstance);

    this.weaponService.createWeapon(weaponInstance).subscribe(
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
