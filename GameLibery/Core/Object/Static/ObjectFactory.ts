import { Block } from './Block/Block';
import { GameUtility } from '../../General/GameUtility';
import { GamePlanConfig } from '../../../Configuration/GameConfig';
import { ObjectOV } from '../../../Configuration/ObjectVisual';
import { Goal } from './Block/Goal';
export class ObjectFactory {

    static reservedCellList: Array<number> = 
        [1, 
        2, 
        3,
        1+GamePlanConfig.HorizontalCell,
        2+GamePlanConfig.HorizontalCell,
        3+GamePlanConfig.HorizontalCell];

    static CreateRandomSingleBlocks(count:number,name:string,objectVisual:ObjectOV):Array<Block>
    {
        
        let SingleBlocks:Array<Block> = new Array<Block>();
        
        for (let i = 0; i < count ; i++) { 
            var randomPosotion= ObjectFactory.GetProperRandomNumber();
            let block= new Block(name, objectVisual,randomPosotion );
            block.Create();
            SingleBlocks.push(block);
        }
        
        return  SingleBlocks;
    }
    

    static CreateRandomSingleGoals(count:number,name:string,objectVisual:ObjectOV):Array<Goal>
    {
        let SingleGoals:Array<Goal> = new Array<Goal>();
        
        for (let i = 0; i < count ; i++) { 
            var randomPosotion= ObjectFactory.GetProperRandomNumber();
            let goal= new Goal(name, objectVisual,randomPosotion);
            goal.Create();
            SingleGoals.push(goal);
        }
        
        return  SingleGoals;
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
                ,right_Up
                ,letf_Up
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