import $ = require("jquery");
import { IPlayerMovement } from "../../../Action/Movement/IPlayerMovement";
import { PlayerMovement } from "../../../Action/Movement/PlayerMovement";
import { Direction, ObjectAttribute } from '../../../General/Enums';
import { BasePlayer } from "./BasePlayer";
import { GameCreation } from "../../../GameCreation";
import { GamePlanConfig } from '../../../../Configuration/GameConfig';
import { GameEvents } from "../../../General/GameEvents";
import { MachinMovement } from '../../../Action/Movement/MachinMovement';
import { Block } from '../../Static/Block/Block';
import { ObjectUtility } from "../../ObjectUtility";
import { ObjectOV } from "../../../../Configuration/ObjectVisual";

export class MachinPlayer extends BasePlayer {

    constructor(name: string, objectVisual:ObjectOV, postionId:number ) {
        super(name, objectVisual,new MachinMovement(name));
        this._playerMovement.currentPosition = postionId;
     
    }
     speed:number=90;
     blocked=false;
    Create(): void {
        super.Create();
        ObjectUtility.AddBlockedAttribute( this._playerMovement.currentPosition ,ObjectAttribute.BlockMachainPlayer);
    }

    Move(direction:Direction):void {
        super.Move(direction);
    }

    MoverMachin(){
      
            this.RunIntelligenceMachin(this._playerMovement.currentPosition)
       
    }
    MoveX(nearGoal:any)
    {
            var direction: Direction = GameEvents.GetDirection(nearGoal.xArrow)
           this.Move(direction)
    }
    MoveY(nearGoal:any)
    {
            var direction: Direction = GameEvents.GetDirection(nearGoal.yArrow)
           this.Move(direction)
    }
    RunIntelligenceMachin(PostionparseId:number):void {
         
        var nearGoal:any = this.FindDistenceOfGoals(PostionparseId);
         this.MoveInX(nearGoal)
    }


    MoveInX(nearGoal:any): void{
                // Game.intelligence.MoveMachin(nearGoal.yArrow, 'steve')
                var that=this;
        var X_Repeat = nearGoal.x;

        var sss2 = window.setInterval(function () {
            
            var nearGoalNew:any = that.FindDistenceOfGoals(that._playerMovement.currentPosition);

            if( nearGoalNew.x != nearGoalNew.x ){
                  nearGoal.x = nearGoalNew.x
                  X_Repeat=0
            }
            if( nearGoalNew.y != nearGoalNew.y)
            {
                  nearGoal.y = nearGoalNew.y
            }
          
            if (X_Repeat <= 0) {
                window.clearTimeout(sss2);
                that.MoveInY(nearGoal)
            } else {

                that.MoveX(nearGoal)
                X_Repeat--;
            }
            var direction: Direction = GameEvents.GetDirection(nearGoal.xArrow)
            if( MachinMovement.IsDeadLock(direction, that._playerMovement.currentPosition ))
            {
                    if(MachinMovement.IsDeadLock(Direction.Left, that._playerMovement.currentPosition ) &&
                     MachinMovement.IsDeadLock(Direction.Right, that._playerMovement.currentPosition )   ){
                        X_Repeat=0
                     }

                    //  if(MachinMovement.IsDeadLock(Direction.Up, that._playerMovement.currentPosition ))
                    //  {
                    //       that.Move(Direction.Down)
                    //  }else  
                    //  {
                    //   that.Move(Direction.Up)
                    //  }
            }

          
        }, this.speed);
    }

    MoveInY(nearGoal:any){
        var that=this;
        var Y_Repeat = nearGoal.y;
 
        var sss = window.setInterval(function () {
            var nearGoalNew:any = that.FindDistenceOfGoals(that._playerMovement.currentPosition);
            
            if( nearGoalNew.x != nearGoalNew.x ){
                nearGoal.x = nearGoalNew.x
                Y_Repeat=0
          }
          if( nearGoalNew.y != nearGoalNew.y)
          {
                nearGoal.y = nearGoalNew.y
              
          }
          
         
            if (Y_Repeat <= 0) {
                window.clearTimeout(sss);
                // $('#' + nearGoal.GoalId).removeClass('Goal');
                // Game.SteveJobsScore = Game.SteveJobsScore + 1;
                // $('#SteveJobsScore').text(Game.SteveJobsScore);
                // Game.intelligence.RunIntelligenceMachin(Game.stevePostionparseId);
                that.MoverMachin()
            } else {
                that.MoveY(nearGoal)
                Y_Repeat--;
            }

            var direction: Direction = GameEvents.GetDirection(nearGoal.xArrow)
         if( MachinMovement.IsDeadLock(direction, that._playerMovement.currentPosition ))
         {
                 if(MachinMovement.IsDeadLock(Direction.Up, that._playerMovement.currentPosition ) &&
                  MachinMovement.IsDeadLock(Direction.Down, that._playerMovement.currentPosition )   ){
                   Y_Repeat=0
                  }
                  
                //   if(MachinMovement.IsDeadLock(Direction.Right, that._playerMovement.currentPosition ))
                //   {
                //        that.Move(Direction.Left)
                //   }else  
                //   {
                //    that.Move(Direction.Right)
                //   }  
         }
        }, this.speed);
    }


    FindDistenceOfGoals(PostionparseId:number) {
         
        var AllDistenceVertex = [{}];
        var TotalDistence = [];
        var GoalId = GameCreation.HumanPlayer._playerMovement.currentPosition;
        var Distence = this.GetDistence(PostionparseId, GoalId)
        return Distence;
        //     AllDistenceVertex.push({
        //         x: Distence.x, y: Distence.y,
        //         xArrow: Distence.xArrow, yArrow: Distence.yArrow,
        //         GoalId: GoalId, TotalDistence: Distence.x + Distence.y
        //     });
        //     TotalDistence.push(Distence.x + Distence.y);
        // var xs = Math.min.apply(Math, TotalDistence);
        // var nearElement =this.FindElement(AllDistenceVertex, xs);
        // return nearElement;
    }

    GetDistence (PockManPostion:number, GoalPostion:number) {
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
            Y_Arrow =  Direction.Up
        var horizontalDistence = GoalPostion - Math.abs((PockManPostion + (VerticalDistence * GamePlanConfig.HorizontalCell)));
        if (horizontalDistence > 0)
            X_Arrow = Direction.Right
        else
            X_Arrow = Direction.Left
        return { x: Math.abs(horizontalDistence), y: Math.abs(VerticalDistence), xArrow: X_Arrow, yArrow: Y_Arrow }
    }

    Get_TR_ID (element:number) {
        var Id :any = $('#' + element).parent('tr').attr('Id');
        return parseInt(Id);
    }

    
    FindElement(Array:any, Postion:number) {
        var target;
        for (var i = 0; i < Array.length; i++) {
            if (Array[i].TotalDistence == Postion) {
                target = {
                    x: Array[i].x, y: Array[i].y,
                    xArrow: Array[i].xArrow, yArrow: Array[i].yArrow,
                    GoalId: Array[i].GoalId, TotalDistence: Array[i].TotalDistence
                };
                break;
            }
        }
        return target;
    }
}