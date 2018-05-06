import $ = require("jquery");
import {
    PlayerMovement
} from "../../../Action/Movement/PlayerMovement";
import {
    IPlayerMovement
} from "../../../Action/Movement/IplayerMovement";
import {
    GamePlayerConfig,
    GamePlanConfig
} from "../../../../Configuration/GameConfig";
import {
    Direction, ObjectAttribute
} from "../../../General/Enums";
import {
    KeyValuePair
} from "../../../../Utility/KeyValuePair";
import {
    HtmlAndCss
} from "../../../../Utility/HtmlAndCss";
import {
    GameObject
} from '../../GameObject';
import {
    ObjectUtility
} from "../../ObjectUtility";
import {
    ObjectOV
} from '../../../../Configuration/ObjectVisual';

import { GameManagement } from "../../../GameManagement";

import   { GameEvents}
from "../../../General/GameEvents";
import { GameCreation } from "../../../GameCreation";
import { GameUtility } from "../../../General/GameUtility";

export abstract class BasePlayer extends GameObject {
    ObjectVisual: ObjectOV;
    _playerMovement: IPlayerMovement;
    constructor(name: string, objectVisual: ObjectOV, playerMovement: IPlayerMovement) {
        super();
        this._playerMovement = playerMovement;
        this._playerMovement.currentPosition = GamePlayerConfig.HumanPlayerPositionStart;
        this._playerMovement.name = name;
        this.name = name;
        this.ObjectVisual = objectVisual;
    }

    Create(): void {
        ObjectUtility.AppearObject(this.name, this.ObjectVisual);

    }

    MoveInDirection(dir: Direction): boolean {
        switch (dir) {
            case Direction.Right:
                return this._playerMovement.Right();
            case Direction.Up:
                return this._playerMovement.Up();
            case Direction.Left:
                return this._playerMovement.Left();
            case Direction.Down:
                return this._playerMovement.Down();
        }
    }

    Move(dir: Direction): boolean {
        if(GameManagement.Puased==false) {
            var IsplayerMoved = this.MoveInDirection(dir);
            return IsplayerMoved;
        }
        return false;
    }

    FindDistenceOfGoals(PostionparseId: number, GoalId: number) {
        var AllDistenceVertex = [{}];
        var TotalDistence = [];
        var Distence = this.GetDistence(PostionparseId, GoalId)
        return Distence;
    }

    GetDistence(PockManPostion: number, GoalPostion: number) {
        //39 asci code is right;
        //37 asci code is left;
        //38 asci code is up
        //40 asci code is down
        var X_Arrow;
        var Y_Arrow
        var VerticalDistence = this.Get_TR_ID(GoalPostion) - this.Get_TR_ID(PockManPostion);
        if (VerticalDistence > 0)
            Y_Arrow = Direction.Down
        else
            Y_Arrow = Direction.Up
        var horizontalDistence = GoalPostion - Math.abs((PockManPostion + (VerticalDistence * GamePlanConfig.HorizontalCell)));
        if (horizontalDistence > 0)
            X_Arrow = Direction.Right
        else
            X_Arrow = Direction.Left
        return {
            x: Math.abs(horizontalDistence),
            y: Math.abs(VerticalDistence),
            xArrow: X_Arrow,
            yArrow: Y_Arrow
        }
    }

    Get_TR_ID(element: number) {
        var Id: any = $('#' + element).parent('tr').attr('Id');
        return parseInt(Id);
    }

    MoveX(nearGoal: any) {
        debugger;
        
        var direction: Direction = GameEvents.GetDirection(nearGoal.xArrow)
        var IsMoved =  this.Move(direction);
        if(IsMoved)
        {
            this.CheckNewPostion()
        }
      
    }

    MoveY(nearGoal: any) {
        debugger;
        var direction: Direction = GameEvents.GetDirection(nearGoal.yArrow)
        var IsMoved = this.Move(direction)
        if(IsMoved)
        {
            this.CheckNewPostion()
        }
    }

    CheckNewPostion()
    {
            let postion= this._playerMovement.currentPosition
            this.IsPlayerCatched(postion);
    }   

    IsPlayerCatched(position:number):void
    {
        var result = GameUtility.GetAttribute(position,ObjectAttribute.Player);
        if (result !== undefined)
        {
            GameManagement.GameOver();
        }
    }

}