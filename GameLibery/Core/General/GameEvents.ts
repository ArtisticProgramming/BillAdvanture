import { GameCreation } from "../../Core/GameCreation";
import { Direction, GameMangemntKey } from "./Enums";
import { GameManagement } from '../GameManagement';


export class GameEvents {

    // tslint:disable-next-line:no-empty
    constructor() {
    }

    ManageEvents(keyCode: number): void {
        debugger;
        this.GameMangeEvent(keyCode);
        this.ProccessDirectionEvent(keyCode);
        
    }

    GameMangeEvent(keyCode: number) : void {
        let gameObje :string = GameMangemntKey[keyCode];
        if (gameObje == null) {
         //   throw new Error("keyCode is wrong!");
         return ;
         }
         var gameMangemntKey: GameMangemntKey = GameMangemntKey[gameObje as keyof typeof GameMangemntKey ];
        if(gameMangemntKey==GameMangemntKey.space)
        {
            GameManagement.Puased = !GameManagement.Puased;
        } 
    }

   public static GetDirection(keyCode: number): Direction {
        // tslint:disable-next-line:typedef
        let directionString :string = Direction[keyCode];
        if (directionString == null) {
           throw new Error("keyCode is wrong!");
        }
        var direction: Direction = Direction[directionString as keyof typeof Direction ];
        return direction;
    }

    private ProccessDirectionEvent(keyCode: number): void {
        // tslint:disable-next-line:typedef
           var direction: Direction = GameEvents.GetDirection(keyCode)
           GameCreation.HumanPlayer.Move(direction);
    }
}

