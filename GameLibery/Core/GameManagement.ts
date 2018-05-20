import { ObjectUtility } from "./Object/ObjectUtility";
import { ObjectAttribute } from "./General/Enums";
import { GameCreation } from "./GameCreation";
import { Menu } from '../Menu';

export class GameManagement {
   public static Puased = true;
   static ReduceGoal(position:number)
    {
        ObjectUtility.DeleteObject(position, ObjectAttribute.Goal);
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
    }

}
