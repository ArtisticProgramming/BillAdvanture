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
    StaticObjectFactory
} from './Object/Static/StaticObjectFactory';
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
    GoalOV,
    Goal2OV,
    Goal3OV,
    Goal12OV,
    Goal11OV,
    Goal10OV,
    Goal9OV,
    Goal8OV,
    Goal7OV,
    Goal6OV,
    AndresOV,
    SatyaNadella,
    ObjectOV,
    zuckerbergOV
} from '../Configuration/ObjectVisual';
import { GoalConfig, MachinPlayer2Config, MachinPlayerConfig } from '../Configuration/GameConfig';

import {
    ObjectAttribute
} from "./General/Enums";
import {
    StaticObject
} from './Object/Static/Block/StaticObject';
import {
    GameManagement
} from './GameManagement';
import {
    Music
} from '../Utility/Music';
import {
    EventHandler
} from '../Utility/EventHandler';

import {   Menu} from '../Menu';
import { TimCook, sundarPichaiOV } from '../Configuration/ObjectVisual';

import {
    Goal4OV,
    Goal5OV
} from '../Configuration/ObjectVisual';
import { DynamicObjectFactory } from './Object/Dynamic/DynamicObjectFactory';

export class GameCreation {
   
    public static GoalCount = GoalConfig.GoalCount;
    public static HumanPlayer: BasePlayer;
    public static MachinPlayers: Array < BasePlayer > ;
    public static SingleBlocks: Array < StaticObject > ;

    // tslint:disable-next-line:no-empty
    constructor() {}

    static initialize(): void {
        GamePlan.getInstance().CreateChessboardPlan();
  
        StaticObjectFactory.CreateRandomSingleBlocks(35, 'block', new FireOV(), ObjectAttribute.kill)
        StaticObjectFactory.CreateRandomSingleBlocks(25, 'block2', new StoneOV(), ObjectAttribute.block)
        StaticObjectFactory.CreateRandomSingleBlocks(30, 'block3', new HoleOV(), ObjectAttribute.kill)
        StaticObjectFactory.CreateRandomSingleBlocks(60, 'block4', new PineTreeOV(), ObjectAttribute.block)
        StaticObjectFactory.CreateRandomSingleBlocks(25, 'block5', new GrassOV(), ObjectAttribute.block)
        StaticObjectFactory.CreateRandomSingleBlocks(50, 'block6', new PalmTreeOV(), ObjectAttribute.block)
        StaticObjectFactory.CreateRandomSingleBlocks(45, 'block7', new CoconutPalmTreeOV(), ObjectAttribute.block)
        //------------------------Goals Creation----------------------------
        StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal', new GoalOV(), ObjectAttribute.Goal)
        StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal2', new Goal2OV(), ObjectAttribute.Goal)
        StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal3', new Goal3OV(), ObjectAttribute.Goal)
        StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal4', new Goal4OV(), ObjectAttribute.Goal)
        StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal5', new Goal5OV(), ObjectAttribute.Goal)
        StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal6', new Goal6OV(), ObjectAttribute.Goal)
        StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal7', new Goal7OV(), ObjectAttribute.Goal)
        StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal8', new Goal8OV(), ObjectAttribute.Goal)
        StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal9', new Goal9OV(), ObjectAttribute.Goal)
        StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal10', new Goal10OV(), ObjectAttribute.Goal)
        StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal11', new Goal11OV(), ObjectAttribute.Goal)
        StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal12', new Goal12OV(), ObjectAttribute.Goal)
        Menu.OpenMainMenu();
    }
    static ConfigGameCreation(): any {
        this.CreatePlayer();
        this.CreateMachin();
    }

    static CreatePlayer(): void {
        let humanplayer: HumanPlayer = new HumanPlayer("player",  GameManagement.Player);
        this.HumanPlayer = humanplayer;
        humanplayer.Create();
        $("#1").addClass(humanplayer.name);
    }  

    static CreateMachin():void{
        let dof=new DynamicObjectFactory();
        var M1Speed = MachinPlayerConfig.speed;
        var M2Speed = MachinPlayer2Config.speed;
        debugger;

        let randormNumber:number=dof.GetProperRandomNumber();
        let machinPlayer: MachinPlayer = new MachinPlayer("stevejobs", new SteveJobsOV(), randormNumber,M1Speed-8);
        machinPlayer.Create();
        $("#"+randormNumber).addClass(machinPlayer.name);
        machinPlayer.MoveMachin();

        randormNumber=dof.GetProperRandomNumber();
        let machinPlayer3: MachinPlayer = new MachinPlayer("zuckerberg", new zuckerbergOV(), randormNumber,M1Speed-15);
        machinPlayer3.Create();
        $("#"+randormNumber).addClass(machinPlayer3.name);
        machinPlayer3.MoveMachin();

        randormNumber=dof.GetProperRandomNumber();
        let machinPlayer4: MachinPlayer = new MachinPlayer("TimCook", new TimCook(), randormNumber,M1Speed);
        machinPlayer4.Create();
        $("#"+randormNumber).addClass(machinPlayer4.name);
        machinPlayer4.MoveMachin();

        randormNumber=dof.GetProperRandomNumber();
        let machinPlayer5: MachinPlayer2 = new MachinPlayer2("sundarPichaiOV", new sundarPichaiOV(), randormNumber,M2Speed);
        machinPlayer5.Create();
        $("#"+randormNumber).addClass(machinPlayer5.name);
        machinPlayer5.MoveMachin();

        randormNumber=dof.GetProperRandomNumber();
        let machinPlayer2: MachinPlayer2 = new MachinPlayer2("linus", new LinusOV(), randormNumber,M2Speed-10);
        machinPlayer2.Create();
        $("#"+randormNumber).addClass(machinPlayer2.name);
        machinPlayer2.MoveMachin();

    }
}