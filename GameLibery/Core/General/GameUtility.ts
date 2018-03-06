import { GamePlanConfig } from '../../Configuration/GameConfig';
export class GameUtility{

    static GetRandomNumber():number {
        return Math.floor((
            Math.random() * ( GamePlanConfig.HorizontalCell * GamePlanConfig.VerticalCell )+1))
    }
    
    static GetAttribute(position:number,attr:string): any {
        let value = $("#"+position.toString()).attr(attr);
        return value;
    }
}