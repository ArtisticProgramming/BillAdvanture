(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "jquery", "./Object/GamePlan", "./Object/Dynamic/Player/HumanPlayer", "./Object/Dynamic/Player/MachinPlayer", "./Object/Static/ObjectFactory", "./Object/Dynamic/Player/MachinPlayer2", "../Configuration/ObjectVisual", "../Configuration/GameConfig", "./General/Enums"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = require("jquery");
    var GamePlan_1 = require("./Object/GamePlan");
    var HumanPlayer_1 = require("./Object/Dynamic/Player/HumanPlayer");
    var MachinPlayer_1 = require("./Object/Dynamic/Player/MachinPlayer");
    var ObjectFactory_1 = require("./Object/Static/ObjectFactory");
    var MachinPlayer2_1 = require("./Object/Dynamic/Player/MachinPlayer2");
    var ObjectVisual_1 = require("../Configuration/ObjectVisual");
    var GameConfig_1 = require("../Configuration/GameConfig");
    var Enums_1 = require("./General/Enums");
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
            var machinPlayer = new MachinPlayer_1.MachinPlayer("stevejobs", new ObjectVisual_1.SteveJobsOV(), 282);
            machinPlayer.Create();
            // this.MachinPlayers.push(machinPlayer);
            $("#282").addClass(machinPlayer.name);
            machinPlayer.MoveMachin();
            var machinPlayer2 = new MachinPlayer2_1.MachinPlayer2("linus", new ObjectVisual_1.LinusOV(), 292);
            machinPlayer2.Create();
            //this.MachinPlayers.push(machinPlayer2);
            $("#292").addClass(machinPlayer2.name);
            machinPlayer2.MoveMachin();
            var machinPlayer3 = new MachinPlayer_1.MachinPlayer("stevejobs", new ObjectVisual_1.SteveJobsOV(), 20);
            machinPlayer3.Create();
            // this.MachinPlayers.push(machinPlayer);
            $("#20").addClass(machinPlayer3.name);
            machinPlayer3.MoveMachin();
            var machinPlayer4 = new MachinPlayer_1.MachinPlayer("stevejobs", new ObjectVisual_1.SteveJobsOV(), 40);
            machinPlayer4.Create();
            // this.MachinPlayers.push(machinPlayer);
            $("#20").addClass(machinPlayer4.name);
            machinPlayer4.MoveMachin();
            var machinPlayer5 = new MachinPlayer_1.MachinPlayer("stevejobs", new ObjectVisual_1.SteveJobsOV(), 30);
            machinPlayer5.Create();
            // this.MachinPlayers.push(machinPlayer);
            $("#20").addClass(machinPlayer5.name);
            machinPlayer5.MoveMachin();
            var machinPlayer6 = new MachinPlayer_1.MachinPlayer("stevejobs", new ObjectVisual_1.SteveJobsOV(), 80);
            machinPlayer6.Create();
            // this.MachinPlayers.push(machinPlayer);
            $("#20").addClass(machinPlayer6.name);
            machinPlayer6.MoveMachin();
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(35, 'block', new ObjectVisual_1.FireOV(), Enums_1.ObjectAttribute.kill);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(25, 'block2', new ObjectVisual_1.StoneOV(), Enums_1.ObjectAttribute.block);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(30, 'block3', new ObjectVisual_1.HoleOV(), Enums_1.ObjectAttribute.kill);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(60, 'block4', new ObjectVisual_1.PineTreeOV(), Enums_1.ObjectAttribute.block);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(25, 'block5', new ObjectVisual_1.GrassOV(), Enums_1.ObjectAttribute.block);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(50, 'block6', new ObjectVisual_1.PalmTreeOV(), Enums_1.ObjectAttribute.block);
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(45, 'block7', new ObjectVisual_1.CoconutPalmTreeOV(), Enums_1.ObjectAttribute.block);
            //------------------------Goals Creation----------------------------
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(this.GoalCount, 'goal', new ObjectVisual_1.GoalOV(), Enums_1.ObjectAttribute.Goal);
        };
        GameCreation.GoalCount = GameConfig_1.GoalConfig.GoalCount;
        return GameCreation;
    }());
    exports.GameCreation = GameCreation;
});
//# sourceMappingURL=GameCreation.js.map