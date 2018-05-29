import { GamePlanConfig } from "../../../Configuration/GameConfig";
import { GameUtility } from "../../General/GameUtility";

export class DynamicObjectFactory {

    reservedCellList: Array<number> = new Array<number>();
   
    constructor() {
        for(let i=1;i<10;i++)
        {
            for(let J=0;J<10;J++)
            {
                this.reservedCellList.push(i+J*GamePlanConfig.HorizontalCell);
            } 
        }
        
    }
    

     GetProperRandomNumber() : number {
        let randomNumber =0;
        while(randomNumber==0)
        {
            let rand= GameUtility.GetRandomNumber();
            var result = this.reservedCellList.indexOf(rand)
                if(result > -1)
                {
                    randomNumber=0;
                    break;
                } else   {
                    randomNumber=rand;
                }
         }
         this.reservedCellList.push(randomNumber);
         return randomNumber
    }
}