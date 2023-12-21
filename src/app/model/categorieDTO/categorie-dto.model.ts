import { Weapon } from '../weapon/weapon.model';

export class CategorieDTO {

  private name: string;

  constructor(data: any) {
    this.name = data.name ? data.name : null;
  }

  get getCategoryName(): string {
    return this.name;
  }

  set setCategoryName(value: string) {
    this.name = value;
  }
}
