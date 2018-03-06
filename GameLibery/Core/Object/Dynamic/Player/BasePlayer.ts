import $ = require("jquery");
import {PlayerMovement
} from "../../../Action/Movement/PlayerMovement";
import {IPlayerMovement
} from "../../../Action/Movement/IplayerMovement";
import { GamePlayerConfig } from "../../../../Configuration/GameConfig";
import { Direction } from "../../../General/Enums";
import { KeyValuePair } from "../../../../Utility/KeyValuePair";
import { HtmlAndCss } from "../../../../Utility/HtmlAndCss";
import { GameObject } from '../../GameObject';
import { ObjectUtility } from "../../ObjectUtility";
import { ObjectOV } from '../../../../Configuration/ObjectVisual';

export abstract class BasePlayer extends GameObject{
     ObjectVisual:ObjectOV;
    _playerMovement: IPlayerMovement;
    constructor(name: string, objectVisual:ObjectOV, playerMovement: IPlayerMovement) {
        super();
        this._playerMovement = playerMovement;
        this._playerMovement.currentPosition = GamePlayerConfig.HumanPlayerPositionStart;
        this._playerMovement.name = name;
        this.name=name;
        this.ObjectVisual= objectVisual;
    }

    Create(): void {
        ObjectUtility.AppearObject( this.name , this.ObjectVisual);
    }

    MoverInDirection(dir: Direction)
    {
        switch (dir) {
            case Direction.Right:
                this._playerMovement.Right();
                break;
            case Direction.Up:
                this._playerMovement.Up();
                break;
            case Direction.Left:
                this._playerMovement.Left();
                break;
            case Direction.Down:
                this._playerMovement.Down();
                break;
        }
    }

    Move(dir: Direction): void {
        this.MoverInDirection(dir)
        // var that=this;
        // setTimeout(function(){that.MoverInDirection(dir)}, 0);
       
    }
}