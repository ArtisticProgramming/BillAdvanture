import $ = require("jquery");
import {
    IPlayerMovement
} from "../../../Action/Movement/IPlayerMovement";
import {
    PlayerMovement
} from "../../../Action/Movement/PlayerMovement";
import {
    Direction, ObjectAttribute
} from '../../../General/Enums';
import {
    BasePlayer
} from "./BasePlayer";
import {
    GameCreation
} from "../../../GameCreation";
import {
    GamePlanConfig, MachinPlayer2Config
} from '../../../../Configuration/GameConfig';
import {
    GameEvents
} from "../../../General/GameEvents";
import {
    MachinMovement
} from "../../../Action/Movement/MachinMovement";

import {
    ObjectOV
} from "../../../../Configuration/ObjectVisual";
import { GameUtility } from "../../../General/GameUtility";
import { GameManagement } from "../../../GameManagement";

export class MachinPlayer2 extends BasePlayer {

    speed: number = 0;
    blocked = false;

    constructor(name: string, objectVisual: ObjectOV, postionId: number,speed:number =MachinPlayer2Config.speed) {
        super(name, objectVisual, new MachinMovement(name));
        this._playerMovement.currentPosition = postionId;
        this.speed=speed;
    }

    Create(): void {
        super.Create();
    }


    MoveMachin() {
        this.RunIntelligenceMachin(this._playerMovement.currentPosition)
    }

    RunIntelligenceMachin(PostionparseId: number): void {
        var GoalId = GameCreation.HumanPlayer._playerMovement.currentPosition;
        var nearGoal: any = super.FindDistenceOfGoals(PostionparseId, GoalId);
        this.MoveInY(nearGoal)
    }

    MoveInX(nearGoal: any): void {
        var that = this;
        var X_Repeat = nearGoal.x;

        var sss2 = window.setInterval(function () {
            var GoalId = GameCreation.HumanPlayer._playerMovement.currentPosition;
            var nearGoalNew: any = that.FindDistenceOfGoals(that._playerMovement.currentPosition, GoalId);

            if (nearGoalNew.x != nearGoalNew.x) {
                nearGoal.x = nearGoalNew.x

            }
            if (nearGoalNew.y != nearGoalNew.y) {
                nearGoal.y = nearGoalNew.y
                X_Repeat = 0
            }

            if (X_Repeat <= 0) {
                window.clearTimeout(sss2);
                that.MoveMachin()
            } else {

               let IsMoved = that.MoveX(nearGoal)
               
                X_Repeat--;

            }

            var direction: Direction = GameEvents.GetDirection(nearGoal.xArrow)
            if (MachinMovement.IsDeadLock(direction, that._playerMovement.currentPosition)) {
                if (MachinMovement.IsDeadLock(Direction.Left, that._playerMovement.currentPosition) &&
                    MachinMovement.IsDeadLock(Direction.Right, that._playerMovement.currentPosition)) {
                    X_Repeat = 0
                }
            }
        }, this.speed);
    }

    MoveInY(nearGoal: any) {
        var that = this;
        var Y_Repeat = nearGoal.y;

        var sss = window.setInterval(function () {
            var GoalId = GameCreation.HumanPlayer._playerMovement.currentPosition;
            var nearGoalNew: any = that.FindDistenceOfGoals(that._playerMovement.currentPosition, GoalId);

            if (nearGoalNew.x != nearGoalNew.x) {
                nearGoal.x = nearGoalNew.x
            }

            if (nearGoalNew.y != nearGoalNew.y) {
                nearGoal.y = nearGoalNew.y
                Y_Repeat = 0
            }

            if (Y_Repeat <= 0) {
                window.clearTimeout(sss);
                that.MoveInX(nearGoal)
            } else {
               let IsMoved = that.MoveY(nearGoal)
                Y_Repeat--;
            }

            var direction: Direction = GameEvents.GetDirection(nearGoal.xArrow)
            if (MachinMovement.IsDeadLock(direction, that._playerMovement.currentPosition)) {
                if (MachinMovement.IsDeadLock(Direction.Up, that._playerMovement.currentPosition) &&
                    MachinMovement.IsDeadLock(Direction.Down, that._playerMovement.currentPosition)) {
                    Y_Repeat = 0
                }
            }
        }, this.speed);
    }
   
}