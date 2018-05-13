import { GameUtility } from '../../General/GameUtility';
import { GamePlanConfig } from '../../../Configuration/GameConfig';
import { ObjectOV } from '../../../Configuration/ObjectVisual';
import { StaticObject } from './Block/StaticObject';
import { ObjectAttribute } from '../../General/Enums';
export class ObjectFactory {

    static reservedCellList: Array<number> = 
        [1, 
        2, 
        3,
        1+GamePlanConfig.HorizontalCell,
        2+GamePlanConfig.HorizontalCell,
        3+GamePlanConfig.HorizontalCell];

    static CreateRandomSingleBlocks(count:number,name:string,objectVisual:ObjectOV,objectType:ObjectAttribute):Array<StaticObject>
    {
        
        let SingleBlocks:Array<StaticObject> = new Array<StaticObject>();
        
        for (let i = 0; i < count ; i++) { 
            var randomPosotion= ObjectFactory.GetProperRandomNumber();
            let block= new StaticObject(name, objectVisual,randomPosotion, objectType);
            block.Create();
            SingleBlocks.push(block);
        }
        
        return  SingleBlocks;
    }
    


    static GetProperRandomNumber() : number {
        let randomNumber =0;
        let arrNumber = new   Array<number>();
        while(randomNumber==0)
        {
            arrNumber=new  Array<number>();
            let rand= GameUtility.GetRandomNumber();
            var left = rand - 1;
            var right = rand +1;
            var up = rand - GamePlanConfig.HorizontalCell;
            var down = rand +GamePlanConfig.HorizontalCell;
            var right_Up=up-1;
            var right_down=down-1;
            var letf_Up=up+1;
            var left_down=down+1;

            arrNumber.push(left
                ,right
                ,up
                ,down
               // ,right_down
               // ,right_Up
               // ,letf_Up
               // ,left_down
                ,rand);

            for(let i=0;i<arrNumber.length;i++)
            {
               // var result=$("#"+arrNumber[i]).hasClass('close');
               var result = this.reservedCellList.indexOf(arrNumber[i])
                if(result > -1)
                {
                    randomNumber=0;
                    break;
                } else   {
                    randomNumber=rand;
                }
            }
        }
        this.reservedCellList=  this.reservedCellList.concat(arrNumber);
        return randomNumber;
    }
}