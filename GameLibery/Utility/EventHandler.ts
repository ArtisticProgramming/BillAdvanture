import { GameManagement } from '../Core/GameManagement';
import { Menu } from '../Menu';
import GameEvents = require("../Core/General/GameEvents");

    export class EventHandler {
        static RegisterkeyDown():void {
            document.addEventListener("keydown", (e: KeyboardEvent) => {
                // tslint:disable-next-line:typedef
                let gameEv = new GameEvents.GameEvents();
                gameEv.ManageEvents(e.keyCode);
            });
        }
        static  RegisterPlayClick():void {
        debugger;
        let btn = document.getElementById("play");
        $("body").on("click", ".play", (event) => this.playStartGame());

        }

        static  RegisterSettingClick():void {
            debugger;
            let btn = document.getElementById("setting");
            $("body").on("click", ".setting", (event) => this.configSettingAndPlay());
    
        }

        static playStartGame(){
           // if (GameManagement.GameIsStarted==true)
           // {
                Menu.CloseMainMenu();  
                GameManagement.GameStart();
           // }else{
                Menu.CloseMainMenu();  
               // Menu.OpenSettingMenu();
            //}
        }

        static configSettingAndPlay(){
                //config

                Menu.CloseSettingMenu();  
                GameManagement.GameStart();
        }
        
    }