export class Weapon {
    private weaponId : number;
    private weaponName : String;
    private weaponPrice : number; 
    private categoryId : number;


    constructor(data : any) {
        this.weaponId = data.weaponId ? data.weaponId : null;
        this.weaponName = data.weaponName ? data.weaponName : null;
        this.weaponPrice = data.weaponPrice ? data.weaponPrice : null;
        this.categoryId = data.categoryId ? data.categoryId : null;
        }
    
    
      get getWeapondId(): number {
        return this.weaponId;
      }
    
      set setWeapondId(value: number) {
        this.weaponId = value;
      }
    
      get getWeapondName(): String {
        return this.weaponName;
      }
    
      set setWeaponName(value: String) {
        this.weaponName = value;
      }

      get getWeaponPrice(): number {
        return this.weaponPrice;
      }
    
      set setWeaponPrice(value: number) {
        this.weaponPrice = value;
      }

      get getWeaponCategory(): number {
        return this.categoryId;
      }
    
      set setWeaponCategory(value: number) {
        this.categoryId = value;
      }

}
