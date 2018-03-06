import { GameCreation } from "../../Core/GameCreation";
import { Direction } from "./Enums";


export class GameEvents {
    // tslint:disable-next-line:no-empty
    constructor() {
    }

    ManageEvents(keyCode: number): void {
        this.ProccessDirectionEvent(keyCode);
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

