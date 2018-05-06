import {
    GamePlanConfig,
    CameraConfig,
    GamePlayerConfig
} from "../../../Configuration/GameConfig";
import {
    IPlayerMovement
} from "./IPlayerMovement";
import {
    Camera
} from "../../Object/Camera";

import { Direction, ObjectAttribute } from '../../General/Enums';
import { ActionConstraint } from "../Constraint/ActionConstraint";


export class PlayerMovement implements IPlayerMovement {
    currentPosition: number = 0;
    name: string = "";

    // tslint:disable-next-line:no-empty
    constructor(name: string) {
        this.name = name;
    }

    // updir=0;
    // downdir=0;
    // leftdir=0;
    // rightdir=0;
    // times= 2;

    Up(): boolean {
        var arrow: Direction = Direction.Up;
        var postion: number = this.currentPosition;
        let newPostion: number = postion - GamePlanConfig.HorizontalCell;
        if (ActionConstraint.MoveIsPssible(newPostion, arrow)) {
            this.UpdatePosition(postion, newPostion);
            Camera.getInstance().MoverCamera("bottom", false, CameraConfig.CameraSpeedVerically );
            return true;
        }
        return false;
    }
    Down(): boolean {
      
        var arrow: Direction = Direction.Down;
        var postion: number = this.currentPosition;
        let newPostion: number = postion + GamePlanConfig.HorizontalCell;
        if (ActionConstraint.MoveIsPssible(newPostion, arrow)) {
            this.UpdatePosition(postion, newPostion);
            Camera.getInstance().MoverCamera("bottom", true, CameraConfig.CameraSpeedVerically );
            return true;
        }
        return false;
    }
    Left():boolean {
        
        var postion: number = this.currentPosition;
        let newPostion: number = postion - 1;
        if (ActionConstraint.MoveIsPssible(newPostion, Direction.Left)) {
            this.UpdatePosition(postion, newPostion);
            Camera.getInstance().MoverCamera("left", true, CameraConfig.CameraSpeedHorizontally );
            return true;
        }
        return false;
    }
    Right(): boolean {
      
        var arrow: Direction = Direction.Right;
        var postion: number = this.currentPosition;
        let newPostion: number = postion + 1;
        if (ActionConstraint.MoveIsPssible(newPostion, arrow)) {
            this.UpdatePosition(postion, newPostion);
            Camera.getInstance().MoverCamera("left", false, CameraConfig.CameraSpeedHorizontally );
            return true;
        }
        return false;
    }

    UpdatePosition(oldPostion: number, newPostion: number): void {
        this.currentPosition = newPostion;
        $("#" + oldPostion.toString()).removeClass(this.name);
        $("#" + newPostion.toString()).addClass(this.name);
    }

}