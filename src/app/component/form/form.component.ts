import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeaponService } from '../../service/weapon.service';
import { Weapon } from 'src/app/model/weapon/weapon.model';
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
      category: null, // Initialize category form control
    });
  }

  ngOnInit() {
    this.weaponService.getCategories().subscribe(
      (categories) => {
        this.categories = categories;
        console.log(this.categories[0].name);
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  submit() {
    const weaponData = {
      name: this.createForm.value.name,
      price: this.createForm.value.price,
      category: this.createForm.value.category,
    };

    const weaponInstance = new Weapon(weaponData);

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
