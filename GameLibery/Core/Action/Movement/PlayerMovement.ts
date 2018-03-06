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

    Up(): void {
     
        
        var arrow: Direction = Direction.Up;
        var postion: number = this.currentPosition;
        let newPostion: number = postion - GamePlanConfig.HorizontalCell;
        if (ActionConstraint.MoveIsPssible(newPostion, arrow)) {
            this.UpdatePosition(postion, newPostion);
            Camera.getInstance().MoverCamera("bottom", false, CameraConfig.CameraSpeedVerically );
        }
    }
    Down(): void {
      
        var arrow: Direction = Direction.Down;
        var postion: number = this.currentPosition;
        let newPostion: number = postion + GamePlanConfig.HorizontalCell;
        if (ActionConstraint.MoveIsPssible(newPostion, arrow)) {
            this.UpdatePosition(postion, newPostion);
           
            Camera.getInstance().MoverCamera("bottom", true, CameraConfig.CameraSpeedVerically );
        }
    }
    Left(): void {
        debugger;
        
        var postion: number = this.currentPosition;
        let newPostion: number = postion - 1;
        if (ActionConstraint.MoveIsPssible(newPostion, Direction.Left)) {
            this.UpdatePosition(postion, newPostion);
            Camera.getInstance().MoverCamera("left", true, CameraConfig.CameraSpeedHorizontally );
        }
    }
    Right(): void {
      
        var arrow: Direction = Direction.Right;
        var postion: number = this.currentPosition;
        let newPostion: number = postion + 1;
        if (ActionConstraint.MoveIsPssible(newPostion, arrow)) {
            this.UpdatePosition(postion, newPostion);
            Camera.getInstance().MoverCamera("left", false, CameraConfig.CameraSpeedHorizontally );
        }
    }



    // Up(): void {
     
        
    //     var arrow: Direction = Direction.Up;
    //     var postion: number = this.currentPosition;
    //     let newPostion: number = postion - GamePlanConfig.HorizontalCell;
    //     if (ActionConstraint.MoveIsPssible(newPostion, arrow)) {
    //         this.UpdatePosition(postion, newPostion);
    //         this.updir++;
    //         if(this.updir == this.times){
                
    //             Camera.getInstance().MoverCamera("bottom", false, CameraConfig.CameraSpeedVerically*this.times);
    //             this.updir=0;
    //         }

    //     }
    // }
    // Down(): void {
      
    //     var arrow: Direction = Direction.Down;
    //     var postion: number = this.currentPosition;
    //     let newPostion: number = postion + GamePlanConfig.HorizontalCell;
    //     if (ActionConstraint.MoveIsPssible(newPostion, arrow)) {
    //         this.downdir ++;
    //         this.UpdatePosition(postion, newPostion);
    //         if(this.downdir == this.times){
    //         Camera.getInstance().MoverCamera("bottom", true, CameraConfig.CameraSpeedVerically*this.times);
    //         this.downdir=0;
    //     }
    //     }
    // }
    // Left(): void {
    //     debugger;
        
    //     var postion: number = this.currentPosition;
    //     let newPostion: number = postion - 1;
    //     if (ActionConstraint.MoveIsPssible(newPostion, Direction.Left)) {
    //         this.leftdir++;
    //         this.UpdatePosition(postion, newPostion);
    //         if(this.leftdir == 3){
    //         Camera.getInstance().MoverCamera("left", true, CameraConfig.CameraSpeedHorizontally*this.times);
    //         this.leftdir=0;
    //     }
    //     }
    // }
    // Right(): void {
      
    //     var arrow: Direction = Direction.Right;
    //     var postion: number = this.currentPosition;
    //     let newPostion: number = postion + 1;
    //     if (ActionConstraint.MoveIsPssible(newPostion, arrow)) {
    //         this.rightdir++;
    //         this.UpdatePosition(postion, newPostion);
    //         if(this.rightdir == this.times){
    //         Camera.getInstance().MoverCamera("left", false, CameraConfig.CameraSpeedHorizontally*this.times);
    //         this.rightdir =0;
    //         }
    //     }
    // }

    UpdatePosition(oldPostion: number, newPostion: number): void {
        this.currentPosition = newPostion;
       
        $("#" + oldPostion.toString()).removeClass(this.name);
        $("#" + newPostion.toString()).addClass(this.name);
    }

}