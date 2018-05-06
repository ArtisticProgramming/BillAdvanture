import { ObjectUtility } from "./Object/ObjectUtility";
import { ObjectAttribute } from "./General/Enums";
import { GameCreation } from "./GameCreation";

export class GameManagement {
   public static Puased = false;
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
             alert("You Win!")    
             window.clearTimeout(fucnc);    
        },200)
    }

    static  GameOver()
    {
        this.GameEnd(); 
        var fucnc = window.setInterval(function () {
        alert("Game Over!")  
        window.clearTimeout(fucnc);    
       },200)      
    }

    static GameEnd()
    {
        this.Puased=true;
    }

}
