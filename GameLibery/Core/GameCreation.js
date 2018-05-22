(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "jquery", "./Object/GamePlan", "./Object/Dynamic/Player/HumanPlayer", "./Object/Static/ObjectFactory", "../Configuration/ObjectVisual", "../Configuration/GameConfig", "./General/Enums", "../Menu", "../Configuration/ObjectVisual"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = require("jquery");
    var GamePlan_1 = require("./Object/GamePlan");
    var HumanPlayer_1 = require("./Object/Dynamic/Player/HumanPlayer");
    var ObjectFactory_1 = require("./Object/Static/ObjectFactory");
    var ObjectVisual_1 = require("../Configuration/ObjectVisual");
    var GameConfig_1 = require("../Configuration/GameConfig");
    var Enums_1 = require("./General/Enums");
    var Menu_1 = require("../Menu");
    var ObjectVisual_2 = require("../Configuration/ObjectVisual");
    var GameCreation = /** @class */ (function () {
        // tslint:disable-next-line:no-empty
        function GameCreation() {
        }
        GameCreation.initialize = function () {
            GamePlan_1.GamePlan.getInstance().CreateChessboardPlan();
            var humanplayer = new HumanPlayer_1.HumanPlayer("bill", new ObjectVisual_1.BillGatesOV());
            this.HumanPlayer = humanplayer;
            humanplayer.Create();
            $("#1").addClass(humanplayer.name);
            //     let machinPlayer: MachinPlayer = new MachinPlayer("stevejobs", new SteveJobsOV(), 282);
            //     machinPlayer.Create();
            //    // this.MachinPlayers.push(machinPlayer);
            //     $("#282").addClass(machinPlayer.name);
            //     machinPlayer.MoveMachin();
            //     let machinPlayer2: MachinPlayer2 = new MachinPlayer2("linus", new LinusOV(), 292);
            //     machinPlayer2.Create();
            //     //this.MachinPlayers.push(machinPlayer2);
            //     $("#292").addClass(machinPlayer2.name);
            //     machinPlayer2.MoveMachin();
            //     let machinPlayer3: MachinPlayer = new MachinPlayer("stevejobs", new SteveJobsOV(), 20);
            //     machinPlayer3.Create();
            //    // this.MachinPlayers.push(machinPlayer);
            //     $("#20").addClass(machinPlayer3.name);
            //     machinPlayer3.MoveMachin();
            //     let machinPlayer4: MachinPlayer = new MachinPlayer("stevejobs", new SteveJobsOV(), 40);
            //     machinPlayer4.Create();
            //    // this.MachinPlayers.push(machinPlayer);
            //     $("#20").addClass(machinPlayer4.name);
            //     machinPlayer4.MoveMachin();
            //     let machinPlayer5: MachinPlayer = new MachinPlayer("stevejobs", new SteveJobsOV(), 30);
            //     machinPlayer5.Create();
            //    // this.MachinPlayers.push(machinPlayer);
            //     $("#20").addClass(machinPlayer5.name);
            //     machinPlayer5.MoveMachin();
            //     let machinPlayer6: MachinPlayer = new MachinPlayer("stevejobs", new SteveJobsOV(), 80);
            //     machinPlayer6.Create();
            //    // this.MachinPlayers.push(machinPlayer);
            //     $("#20").addClass(machinPlayer6.name);
            //     machinPlayer6.MoveMachin();
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(35, 'block', new ObjectVisual_1.FireOV(), Enums_1.ObjectAttribute.kill);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(25, 'block2', new ObjectVisual_1.StoneOV(), Enums_1.ObjectAttribute.block);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(30, 'block3', new ObjectVisual_1.HoleOV(), Enums_1.ObjectAttribute.kill);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(60, 'block4', new ObjectVisual_1.PineTreeOV(), Enums_1.ObjectAttribute.block);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(25, 'block5', new ObjectVisual_1.GrassOV(), Enums_1.ObjectAttribute.block);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(50, 'block6', new ObjectVisual_1.PalmTreeOV(), Enums_1.ObjectAttribute.block);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(45, 'block7', new ObjectVisual_1.CoconutPalmTreeOV(), Enums_1.ObjectAttribute.block);
            //------------------------Goals Creation----------------------------
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(1, 'goal', new ObjectVisual_1.GoalOV(), Enums_1.ObjectAttribute.Goal);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(1, 'goal2', new ObjectVisual_1.Goal2OV(), Enums_1.ObjectAttribute.Goal);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(1, 'goal3', new ObjectVisual_1.Goal3OV(), Enums_1.ObjectAttribute.Goal);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(1, 'goal4', new ObjectVisual_2.Goal4OV(), Enums_1.ObjectAttribute.Goal);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(1, 'goal5', new ObjectVisual_2.Goal5OV(), Enums_1.ObjectAttribute.Goal);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(1, 'goal6', new ObjectVisual_1.Goal6OV(), Enums_1.ObjectAttribute.Goal);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(1, 'goal7', new ObjectVisual_1.Goal7OV(), Enums_1.ObjectAttribute.Goal);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(1, 'goal8', new ObjectVisual_1.Goal8OV(), Enums_1.ObjectAttribute.Goal);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(1, 'goal9', new ObjectVisual_1.Goal9OV(), Enums_1.ObjectAttribute.Goal);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(1, 'goal10', new ObjectVisual_1.Goal10OV(), Enums_1.ObjectAttribute.Goal);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(1, 'goal11', new ObjectVisual_1.Goal11OV(), Enums_1.ObjectAttribute.Goal);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(1, 'goal12', new ObjectVisual_1.Goal12OV(), Enums_1.ObjectAttribute.Goal);
            Menu_1.Menu.OpenMainMenu();
        };
        GameCreation.GoalCount = GameConfig_1.GoalConfig.GoalCount;
        return GameCreation;
    }());
    exports.GameCreation = GameCreation;
});
//# sourceMappingURL=GameCreation.js.map