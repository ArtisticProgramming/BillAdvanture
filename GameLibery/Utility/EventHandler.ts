import { GameManagement } from '../Core/GameManagement';
import GameEvents = require("../Core/General/GameEvents");

    export class EventHandler {
        static RegisterkeyDown():void {
            document.addEventListener("keydown", (e: KeyboardEvent) => {
                // tslint:disable-next-line:typedef
                let gameEv = new GameEvents.GameEvents();
                gameEv.ManageEvents(e.keyCode);
            });
        }
        static RegisterPlayClick():void {
        debugger;
        let btn = document.getElementById("play");
        $("body").on("click", ".play", (event) => this.startGame());

        }
        static startGame(){
            //   alert("play");
              GameManagement.GameStart();
              
        }
    }