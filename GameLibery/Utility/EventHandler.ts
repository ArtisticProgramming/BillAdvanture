import GameEvents = require("../Core/General/GameEvents");

    export class EventHandler {
        static RegisterkeyDown():void {
            document.addEventListener("keydown", (e: KeyboardEvent) => {
                // tslint:disable-next-line:typedef
                let gameEv = new GameEvents.GameEvents();
                gameEv.ManageEvents(e.keyCode);
            });
        }
    }