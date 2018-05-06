import $ = require("jquery");
import { IPlayerMovement } from "../../../Action/Movement/IPlayerMovement";
import { PlayerMovement } from "../../../Action/Movement/PlayerMovement";
import { Direction, ObjectAttribute } from "../../../General/Enums";
import { BasePlayer } from "./BasePlayer";
import { ObjectOV } from "../../../../Configuration/ObjectVisual";
import { GamePlanConfig } from '../../../../Configuration/GameConfig';
import { GameCreation } from '../../../GameCreation';
import { GameUtility } from "../../../General/GameUtility";
import { ObjectUtility } from "../../ObjectUtility";
import { GameManagement } from "../../../GameManagement";

export class HumanPlayer extends BasePlayer {

    constructor(name: string, objectVisual:ObjectOV) {
        let player:IPlayerMovement = new PlayerMovement(name);
        super(name, objectVisual,player);
    }

    Create(): void {
        super.Create();
        let postion= GameCreation.HumanPlayer._playerMovement.currentPosition;
        ObjectUtility.AddObjectAttribute(postion, ObjectAttribute.Player);
        
    }

    Move(direction:Direction):boolean {
      var IsplayerMoved = super.Move(direction);
      if(IsplayerMoved==true)
       this.CheckNewPostion();
      return IsplayerMoved;
    }

    CheckNewPostion(){
        let postion= GameCreation.HumanPlayer._playerMovement.currentPosition;
        //check for goal 
        this.CheckForGoal(postion);
        //check for kill
        this.CheckForkill(postion);
        this.CheckCollisionWithMachinPlayer(postion);
    }
    
    CheckForGoal(position:number):void
    {
        var result = GameUtility.GetAttribute(position,ObjectAttribute.Goal);
        if (result !== undefined)
        {
            GameManagement.ReduceGoal(position)
        }
    }

    CheckForkill(position:number):void
    {
        var result = GameUtility.GetAttribute(position,ObjectAttribute.kill);
        if (result !== undefined)
        {
            GameManagement.GameOver();
        }
    }

    CheckCollisionWithMachinPlayer(position:number):void
    {
        var result = GameUtility.GetAttribute(position,ObjectAttribute.BlockMachainPlayer);
        if (result !== undefined)
        {
            GameManagement.GameOver();
        }
    }

}