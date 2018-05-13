import $ = require("jquery");
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

        let machinPlayer: MachinPlayer = new MachinPlayer("stevejobs", new SteveJobsOV(), 262);
        machinPlayer.Create();
       // this.MachinPlayers.push(machinPlayer);
        $("#262").addClass(machinPlayer.name);
        machinPlayer.MoveMachin();

        let machinPlayer2: MachinPlayer2 = new MachinPlayer2("linus", new LinusOV(), 292);
        machinPlayer2.Create();
        //this.MachinPlayers.push(machinPlayer2);
        $("#292").addClass(machinPlayer2.name);
        machinPlayer2.MoveMachin();


        ObjectFactory.CreateRandomSingleBlocks(35, 'block', new FireOV(),ObjectAttribute.kill)
        ObjectFactory.CreateRandomSingleBlocks(25, 'block2', new StoneOV(),ObjectAttribute.block)
        ObjectFactory.CreateRandomSingleBlocks(30, 'block3', new HoleOV(),ObjectAttribute.kill)
        ObjectFactory.CreateRandomSingleBlocks(60, 'block4',new PineTreeOV(),ObjectAttribute.block)
        ObjectFactory.CreateRandomSingleBlocks(25, 'block5',new GrassOV(),ObjectAttribute.block)
        ObjectFactory.CreateRandomSingleBlocks(50, 'block6', new PalmTreeOV(),ObjectAttribute.block)
        ObjectFactory.CreateRandomSingleBlocks(45, 'block7',new CoconutPalmTreeOV(),ObjectAttribute.block)
        //------------------------Goals Creation----------------------------
        ObjectFactory.CreateRandomSingleBlocks(this.GoalCount, 'goal', new GoalOV(),ObjectAttribute.Goal)

        if (confirm('Start Game Now?')) {
           GameManagement.GameStart();
        } else {
            // Do nothing!
        }
    }
}