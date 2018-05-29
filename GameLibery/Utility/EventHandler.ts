import {  GameManagement} from '../Core/GameManagement';
import { BillGatesOV, SatyaNadella } from '../Configuration/ObjectVisual';
import   { Menu} from '../Menu';
import { GameCreation } from '../Core/GameCreation';
import GameEvents = require("../Core/General/GameEvents");

export class EventHandler {
    static RegisterEvents(): any {
        EventHandler.RegisterkeyDown();
        EventHandler.RegisterPlayClick();
        EventHandler.RegisterChangeCharchter();
        EventHandler.RegisterChangeDegree();
        EventHandler.RegisterConfigSettingAndPlay();
    }
    static RegisterkeyDown(): void {
        document.addEventListener("keydown", (e: KeyboardEvent) => {
            let gameEv = new GameEvents.GameEvents();
            gameEv.ManageEvents(e.keyCode);
        });
    }
    static RegisterPlayClick(): void {
        $("body").on("click", ".play", (event) => GameManagement.playStartGame());
    }
    static RegisterConfigSettingAndPlay(): void {
        $("body").on("click", ".configSettingAndPlay", (event) => GameManagement.ConfigSettingAndPlay());
    }
    static RegisterChangeCharchter(): void {
        $("body").on("change", ".charchterRadioBtn", (event) => GameManagement.SelectPlayer());
    }
    static RegisterChangeDegree(): void {
        $("body").on("change", ".degreeRadioBtn", (event) => GameManagement.SelectDegree());
    }
}