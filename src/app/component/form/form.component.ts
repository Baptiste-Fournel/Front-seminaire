import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeaponService } from '../../service/weapon.service';
import { WeaponDTO } from 'src/app/model/weaponDTO/weapon-dto.model';
import { Categorie } from 'src/app/model/categorie/categorie.model'; // Update the path
import { Location } from '@angular/common';
import { CatalogService } from 'src/app/service/catalog/catalog.service';
import { Catalog } from 'src/app/model/catalog/catalog.model';
import { CategorieDTO } from 'src/app/model/categorieDTO/categorie-dto.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public createForm: FormGroup;
  public categories: Categorie[] = []; // Array to store categories
  public catalog: Catalog = Object.create(null);
  isLoading: boolean | undefined;
  constructor(
    public formBuilder: FormBuilder,
    private weaponService: WeaponService,
    private catalogueService: CatalogService
  ) {
    this.createForm = this.formBuilder.group({
      name: '',
      price: '',
      category: [null], // Initialize category form control
      newCategoryName: '',
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
    if (this.createForm.value.category == 'nouvelle') {
      const categorieInstance = new CategorieDTO({
        name: this.createForm.value.newCategoryName,
      });

      this.weaponService.createCategorie(categorieInstance).subscribe(
        (createdCategory: Categorie) => {
          console.log(
            'Category created successfully:',
            createdCategory,
            'categoryid is ',
            createdCategory['categoryId']
          );

          const newCategoryId = createdCategory['categoryId'];

          const weaponInstance = new WeaponDTO({
            name: this.createForm.value.name,
            price: this.createForm.value.price,
            categoryId: newCategoryId,
          });

          console.log('Weapon created successfully:', weaponInstance);

          this.weaponService.createWeapon(weaponInstance).subscribe(
            (response) => {
              console.log('Weapon created successfully:', response);
              location.reload();
              this.catalogueService
                .getCatalog()
                .subscribe((catalogBack: any) => {
                  this.catalog = new Catalog(catalogBack);
                  this.isLoading = false;
                });
            },
            (error) => {
              console.error('Error creating weapon:', error);
            }
          );

          this.catalogueService.getCatalog().subscribe((catalogBack: any) => {
            this.catalog = new Catalog(catalogBack);
            this.isLoading = false;
          });
        },
        (error) => {
          console.error(
            'Error creating categorie:',
            categorieInstance,
            ' ',
            error
          );
        }
      );
    } else {
      const weaponInstance = new WeaponDTO({
        name: this.createForm.value.name,
        price: this.createForm.value.price,
        categoryId: this.createForm.value.category,
      });

      console.log('Weapon created successfully:', weaponInstance);

      this.weaponService.createWeapon(weaponInstance).subscribe(
        (response) => {
          console.log('Weapon created successfully:', response);
          location.reload();
          this.catalogueService.getCatalog().subscribe((catalogBack: any) => {
            this.catalog = new Catalog(catalogBack);
            this.isLoading = false;
          });
        },
        (error) => {
          console.error('Error creating weapon:', error);
        }
      );
    }
  }
}
