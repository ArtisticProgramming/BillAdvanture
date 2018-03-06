import { Block } from './Block/Block';
import { GameUtility } from '../../General/GameUtility';
import { GamePlanConfig } from '../../../Configuration/GameConfig';
import { ObjectOV } from '../../../Configuration/ObjectVisual';
export class ObjectFactory {

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


    static GetProperRandomNumber() : number {
        let randomNumber =0;
        while(randomNumber==0)
        {
            let rand= GameUtility.GetRandomNumber();
            let arrNumber = new   Array<Number>();
            var left = rand - 1;
            var right = rand +1;
            var up = rand - GamePlanConfig.HorizontalCell;
            var down = rand +GamePlanConfig.HorizontalCell;
            var right_Up=up-1;
            var right_down=down-1;
            var letf_Up=up+1;
            var left_down=down+1;

            arrNumber.push(left,right,up,down,right_down,right_Up,letf_Up,left_down);
            for(let i=0;i<arrNumber.length;i++)
            {
                var result=$("#"+arrNumber[i]).hasClass('close');
                if(<any>(result))
                {
                    randomNumber=0;
                    break;
                }else   {
                    randomNumber=rand;
                }
            }
        }
        return randomNumber;
    }

}