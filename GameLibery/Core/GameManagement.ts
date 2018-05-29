import { ObjectUtility } from "./Object/ObjectUtility";
import { ObjectAttribute } from "./General/Enums";
import { GameCreation } from './GameCreation';
import { Menu } from '../Menu';
import { ObjectOV, BillGatesOV, SatyaNadella, CoconutPalmTreeOV } from '../Configuration/ObjectVisual';
import { MachinPlayer2Config, MachinPlayerConfig } from '../Configuration/GameConfig';

export class GameManagement {
   public static Puased = true;
   public static GameIsStarted = false;
   public static Player:ObjectOV = new BillGatesOV();

   static ReduceGoal(position:number,name:string)
    {
        ObjectUtility.DeleteObject(position, ObjectAttribute.Goal,name);
        GameCreation.GoalCount = GameCreation.GoalCount-1;
        if (GameCreation.GoalCount == 0 )
        {
            this.PlayerWin();
        }
    }

    static PlayerWin()
    {
        this.GameEnd(); 
        var fucnc = window.setInterval(function () {
            Menu.OpenWinMenu(); 
            window.clearTimeout(fucnc);    
        },200)
    }

    static  GameOver()
    {
        this.GameEnd(); 
        var fucnc = window.setInterval(function () {
        Menu.OpenGameOverMenu()
       // location.reload();
        window.clearTimeout(fucnc);    
       },200)      
    }

    static GamePuased()
    {
        this.Puased= !this.Puased;
        if (this.Puased)
        {
            Menu.playModal.open();
        }else   {
            Menu.playModal.close();
        }
    }

    static GameEnd()
    {
        this.Puased=true;
    }

    static GameStart()
    {
        this.Puased=false;
        this.GameIsStarted=true
    }

    static SelectDegree() {
        debugger;
        var result= $("input[name='Degree']:checked").val();
        if(result=="Easy")
        {
            MachinPlayerConfig.speed=160;
            MachinPlayer2Config.speed=160;
        }
        if(result=="Normal")
        {
            MachinPlayerConfig.speed=120;
            MachinPlayer2Config.speed=120;
        }
        if(result=="Hard")
        {
            MachinPlayerConfig.speed=100;
            MachinPlayer2Config.speed=100;
        }
        if(result=="VeryHard")
        {
            MachinPlayerConfig.speed=80;
            MachinPlayer2Config.speed=80;
        }
    }

    static SelectPlayer() {
        var result= $("input[name='charchter']:checked").val();
        if(result=="BillGates")
        {
           GameManagement.Player =new BillGatesOV();
        }else{
            GameManagement.Player =new SatyaNadella();
        }
    }
   

    static playStartGame() {
        if (this.GameIsStarted == true) {
            Menu.CloseMainMenu();
            this.GameStart();
        } else {
            Menu.CloseMainMenu();
            Menu.OpenSettingMenu();
        }
    }

    static ConfigSettingAndPlay() {
        GameCreation.ConfigGameCreation();
        Menu.CloseSettingMenu();
        this.GameIsStarted =true;
        this.GameStart();
    }
}
