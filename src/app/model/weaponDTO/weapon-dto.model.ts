export class WeaponDTO {
    private name : String;
    private price : number; 
    private categoryId : number;


    constructor(data : any) {
        this.name = data.name ? data.name : null;
        this.price = data.price ? data.price : null;
        this.categoryId = data.categoryId ? data.categoryId : null;
        }
    
      get getWeapondName(): String {
        return this.name;
      }
    
      set setWeaponName(value: String) {
        this.name = value;
      }

      get getWeaponPrice(): number {
        return this.price;
      }
    
      set setWeaponPrice(value: number) {
        this.price = value;
      }

      get getWeaponCategory(): number {
        return this.categoryId;
      }
    
      set setWeaponCategory(value: number) {
        this.categoryId = value;
      }

}
