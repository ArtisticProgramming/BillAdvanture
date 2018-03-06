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


export class MachinMovement implements IPlayerMovement {
    currentPosition: number = 0;
    name: string = "";

    // tslint:disable-next-line:no-empty
    constructor(name: string) {
        this.name = name;
    }
    
    static GetNewPostion(direction:Direction,position:number):number { 
        let newPostion=0;
        switch (direction) {
            case Direction.Right:
            newPostion=  position +1;
                break;
            case Direction.Up:
            newPostion=  position - GamePlanConfig.HorizontalCell; 
                break;
            case Direction.Left:
            newPostion=  position - 1;
                break;
            case Direction.Down:
            newPostion=  position + GamePlanConfig.HorizontalCell; 
                break;
        }
        return  newPostion;
    }
    Up(): void {
        var arrow: Direction = Direction.Up;
        var postion: number = this.currentPosition;
        let newPostion: number = MachinMovement.GetNewPostion(arrow,postion);
        if (ActionConstraint.MoveIsPssibleMachin(newPostion, arrow)) {
            this.UpdatePosition(postion, newPostion);
            // Camera.getInstance().MoverCamera("bottom", false, CameraConfig.CameraSpeedVerically);
        }
    }
    Down(): void {
        var arrow: Direction = Direction.Down;
        var postion: number = this.currentPosition;
        let newPostion: number = MachinMovement.GetNewPostion(arrow,postion);
        if (ActionConstraint.MoveIsPssibleMachin(newPostion, arrow)) {
            this.UpdatePosition(postion, newPostion);
            // Camera.getInstance().MoverCamera("bottom", true, CameraConfig.CameraSpeedVerically);
        }
    }
    Left(): void {
        var arrow: Direction = Direction.Left;
        var postion: number = this.currentPosition;
        let newPostion: number = MachinMovement.GetNewPostion(arrow,postion);
        if (ActionConstraint.MoveIsPssibleMachin(newPostion, arrow)) {
            this.UpdatePosition(postion, newPostion);
            // Camera.getInstance().MoverCamera("left", true, CameraConfig.CameraSpeedHorizontally);
        }
    }
    Right(): void {
        var arrow: Direction = Direction.Right;
        var postion: number = this.currentPosition;
        let newPostion: number = MachinMovement.GetNewPostion(arrow,postion);
        if (ActionConstraint.MoveIsPssibleMachin(newPostion, arrow)) {
            this.UpdatePosition(postion, newPostion);
            // Camera.getInstance().MoverCamera("left", false, CameraConfig.CameraSpeedHorizontally);
        }
    }
               // switch (direction) {
                //             case Direction.Right:
                //             if(ActionConstraint.MoveIsPssibleMachin(newPostion, Right))
                //                 this.Up();
                //                 break;
                //             case Direction.Up:
                //                 break;
                //             case Direction.Left:
                //                 break;
                //             case Direction.Down:
                //                 break;
                //         }
          
       
    static IsDeadLock(direction:Direction, position:number )
    {
        let newPostion: number = this.GetNewPostion(direction,position);
         if(ActionConstraint.IsItblock(newPostion, direction))
            {
                    return true;
            }

            if(ActionConstraint.IsOutsideOfBoundary(newPostion, direction))
            {
                    return true;
            }
            return  false;
    }
   
    UpdatePosition(oldPostion: number, newPostion: number): void {
        this.currentPosition = newPostion;
        let attribute :ObjectAttribute =ObjectAttribute.BlockMachainPlayer;
        $("#" + oldPostion.toString()).removeAttr(attribute);
        $("#" + newPostion.toString()).attr(attribute,attribute);
        
        $("#" + oldPostion.toString()).removeClass(this.name);
        $("#" + newPostion.toString()).addClass(this.name);
    }

}