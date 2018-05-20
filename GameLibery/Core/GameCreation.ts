﻿import $ = require("jquery");
import {
    GamePlan
} from "./Object/GamePlan";
import {
    HumanPlayer
} from "./Object/Dynamic/Player/HumanPlayer";
import {
    MachinPlayer
} from './Object/Dynamic/Player/MachinPlayer';
import {
    BasePlayer
} from "./Object/Dynamic/Player/BasePlayer";

import {
    ObjectFactory
} from './Object/Static/ObjectFactory';
import {
    MachinPlayer2
} from "./Object/Dynamic/Player/MachinPlayer2";
import {
    BillGatesOV,
    SteveJobsOV,
    LinusOV,
    PineTreeOV,
    PalmTreeOV,
    CoconutPalmTreeOV,
    FireOV,
    StoneOV,
    HoleOV,
    GrassOV,
    GoalOV
} from '../Configuration/ObjectVisual';
import { GoalConfig } from "../Configuration/GameConfig";
import { ObjectAttribute } from "./General/Enums";
import { StaticObject } from './Object/Static/Block/StaticObject';
import { GameManagement } from './GameManagement';
import { Music } from '../Utility/Music';
import { EventHandler } from '../Utility/EventHandler';
import { Menu } from '../Menu';

export class GameCreation {
    public static GoalCount = GoalConfig.GoalCount;
    public static HumanPlayer: BasePlayer;
    public static MachinPlayers: Array < BasePlayer > ;
    public static SingleBlocks: Array < StaticObject > ;

    // tslint:disable-next-line:no-empty
    constructor() {}

    static initialize(): void {
        GamePlan.getInstance().CreateChessboardPlan();
        let humanplayer: HumanPlayer = new HumanPlayer("bill", new BillGatesOV());
        this.HumanPlayer = humanplayer;
        humanplayer.Create();
        $("#1").addClass(humanplayer.name);

        let machinPlayer: MachinPlayer = new MachinPlayer("stevejobs", new SteveJobsOV(), 282);
        machinPlayer.Create();
       // this.MachinPlayers.push(machinPlayer);
        $("#282").addClass(machinPlayer.name);
        machinPlayer.MoveMachin();

        let machinPlayer2: MachinPlayer2 = new MachinPlayer2("linus", new LinusOV(), 292);
        machinPlayer2.Create();
        //this.MachinPlayers.push(machinPlayer2);
        $("#292").addClass(machinPlayer2.name);
        machinPlayer2.MoveMachin();


        let machinPlayer3: MachinPlayer = new MachinPlayer("stevejobs", new SteveJobsOV(), 20);
        machinPlayer3.Create();
       // this.MachinPlayers.push(machinPlayer);
        $("#20").addClass(machinPlayer3.name);
        machinPlayer3.MoveMachin();
        
        let machinPlayer4: MachinPlayer = new MachinPlayer("stevejobs", new SteveJobsOV(), 40);
        machinPlayer4.Create();
       // this.MachinPlayers.push(machinPlayer);
        $("#20").addClass(machinPlayer4.name);
        machinPlayer4.MoveMachin();

        
        let machinPlayer5: MachinPlayer = new MachinPlayer("stevejobs", new SteveJobsOV(), 30);
        machinPlayer5.Create();
       // this.MachinPlayers.push(machinPlayer);
        $("#20").addClass(machinPlayer5.name);
        machinPlayer5.MoveMachin();

        
        let machinPlayer6: MachinPlayer = new MachinPlayer("stevejobs", new SteveJobsOV(), 80);
        machinPlayer6.Create();
       // this.MachinPlayers.push(machinPlayer);
        $("#20").addClass(machinPlayer6.name);
        machinPlayer6.MoveMachin();

        ObjectFactory.CreateRandomSingleBlocks(35, 'block', new FireOV(),ObjectAttribute.kill)
        ObjectFactory.CreateRandomSingleBlocks(25, 'block2', new StoneOV(),ObjectAttribute.block)
        ObjectFactory.CreateRandomSingleBlocks(30, 'block3', new HoleOV(),ObjectAttribute.kill)
        ObjectFactory.CreateRandomSingleBlocks(60, 'block4',new PineTreeOV(),ObjectAttribute.block)
        ObjectFactory.CreateRandomSingleBlocks(25, 'block5',new GrassOV(),ObjectAttribute.block)
        ObjectFactory.CreateRandomSingleBlocks(50, 'block6', new PalmTreeOV(),ObjectAttribute.block)
        ObjectFactory.CreateRandomSingleBlocks(45, 'block7',new CoconutPalmTreeOV(),ObjectAttribute.block)
        //------------------------Goals Creation----------------------------
        ObjectFactory.CreateRandomSingleBlocks(this.GoalCount, 'goal', new GoalOV(),ObjectAttribute.Goal)
        Menu.OpenMainMenu();
    }
}
