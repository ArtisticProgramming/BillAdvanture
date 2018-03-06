import $ = require("jquery");
import { IPlayerMovement } from "../../../Action/Movement/IPlayerMovement";
import { PlayerMovement } from "../../../Action/Movement/PlayerMovement";
import { Direction } from "../../../General/Enums";
import { BasePlayer } from "./BasePlayer";
import { ObjectOV } from "../../../../Configuration/ObjectVisual";
import { GamePlanConfig } from '../../../../Configuration/GameConfig';

export class HumanPlayer extends BasePlayer {

    constructor(name: string, objectVisual:ObjectOV) {
        let player:IPlayerMovement = new PlayerMovement(name);
        super(name, objectVisual,player);
    }

    Create(): void {
        super.Create();
        $("#1").addClass("close");
        $("#2").addClass("close");
        $("#3").addClass("close");
        $("#"+1+GamePlanConfig.HorizontalCell).addClass("close");
        $("#"+2+GamePlanConfig.HorizontalCell).addClass("close");
        $("#"+3+GamePlanConfig.HorizontalCell).addClass("close");
        $("#"+1+GamePlanConfig.HorizontalCell*2).addClass("close");
        $("#"+2+GamePlanConfig.HorizontalCell*2).addClass("close");
        $("#"+3+GamePlanConfig.HorizontalCell*2).addClass("close");
    }

    Move(direction:Direction):void {
      
        super.Move(direction);
    }
}