(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "jquery", "./Object/GamePlan", "./Object/Dynamic/Player/HumanPlayer", "./Object/Dynamic/Player/MachinPlayer", "./Object/Static/StaticObjectFactory", "./Object/Dynamic/Player/MachinPlayer2", "../Configuration/ObjectVisual", "../Configuration/GameConfig", "./General/Enums", "./GameManagement", "../Menu", "../Configuration/ObjectVisual", "../Configuration/ObjectVisual", "./Object/Dynamic/DynamicObjectFactory"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = require("jquery");
    var GamePlan_1 = require("./Object/GamePlan");
    var HumanPlayer_1 = require("./Object/Dynamic/Player/HumanPlayer");
    var MachinPlayer_1 = require("./Object/Dynamic/Player/MachinPlayer");
    var StaticObjectFactory_1 = require("./Object/Static/StaticObjectFactory");
    var MachinPlayer2_1 = require("./Object/Dynamic/Player/MachinPlayer2");
    var ObjectVisual_1 = require("../Configuration/ObjectVisual");
    var GameConfig_1 = require("../Configuration/GameConfig");
    var Enums_1 = require("./General/Enums");
    var GameManagement_1 = require("./GameManagement");
    var Menu_1 = require("../Menu");
    var ObjectVisual_2 = require("../Configuration/ObjectVisual");
    var ObjectVisual_3 = require("../Configuration/ObjectVisual");
    var DynamicObjectFactory_1 = require("./Object/Dynamic/DynamicObjectFactory");
    var GameCreation = /** @class */ (function () {
        // tslint:disable-next-line:no-empty
        function GameCreation() {
        }
        GameCreation.initialize = function () {
            GamePlan_1.GamePlan.getInstance().CreateChessboardPlan();
            StaticObjectFactory_1.StaticObjectFactory.CreateRandomSingleBlocks(35, 'block', new ObjectVisual_1.FireOV(), Enums_1.ObjectAttribute.kill);
            StaticObjectFactory_1.StaticObjectFactory.CreateRandomSingleBlocks(25, 'block2', new ObjectVisual_1.StoneOV(), Enums_1.ObjectAttribute.block);
            StaticObjectFactory_1.StaticObjectFactory.CreateRandomSingleBlocks(30, 'block3', new ObjectVisual_1.HoleOV(), Enums_1.ObjectAttribute.kill);
            StaticObjectFactory_1.StaticObjectFactory.CreateRandomSingleBlocks(60, 'block4', new ObjectVisual_1.PineTreeOV(), Enums_1.ObjectAttribute.block);
            StaticObjectFactory_1.StaticObjectFactory.CreateRandomSingleBlocks(25, 'block5', new ObjectVisual_1.GrassOV(), Enums_1.ObjectAttribute.block);
            StaticObjectFactory_1.StaticObjectFactory.CreateRandomSingleBlocks(50, 'block6', new ObjectVisual_1.PalmTreeOV(), Enums_1.ObjectAttribute.block);
            StaticObjectFactory_1.StaticObjectFactory.CreateRandomSingleBlocks(45, 'block7', new ObjectVisual_1.CoconutPalmTreeOV(), Enums_1.ObjectAttribute.block);
            //------------------------Goals Creation----------------------------
            StaticObjectFactory_1.StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal', new ObjectVisual_1.GoalOV(), Enums_1.ObjectAttribute.Goal);
            StaticObjectFactory_1.StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal2', new ObjectVisual_1.Goal2OV(), Enums_1.ObjectAttribute.Goal);
            StaticObjectFactory_1.StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal3', new ObjectVisual_1.Goal3OV(), Enums_1.ObjectAttribute.Goal);
            StaticObjectFactory_1.StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal4', new ObjectVisual_3.Goal4OV(), Enums_1.ObjectAttribute.Goal);
            StaticObjectFactory_1.StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal5', new ObjectVisual_3.Goal5OV(), Enums_1.ObjectAttribute.Goal);
            StaticObjectFactory_1.StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal6', new ObjectVisual_1.Goal6OV(), Enums_1.ObjectAttribute.Goal);
            StaticObjectFactory_1.StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal7', new ObjectVisual_1.Goal7OV(), Enums_1.ObjectAttribute.Goal);
            StaticObjectFactory_1.StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal8', new ObjectVisual_1.Goal8OV(), Enums_1.ObjectAttribute.Goal);
            StaticObjectFactory_1.StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal9', new ObjectVisual_1.Goal9OV(), Enums_1.ObjectAttribute.Goal);
            StaticObjectFactory_1.StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal10', new ObjectVisual_1.Goal10OV(), Enums_1.ObjectAttribute.Goal);
            StaticObjectFactory_1.StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal11', new ObjectVisual_1.Goal11OV(), Enums_1.ObjectAttribute.Goal);
            StaticObjectFactory_1.StaticObjectFactory.CreateRandomSingleBlocks(1, 'goal12', new ObjectVisual_1.Goal12OV(), Enums_1.ObjectAttribute.Goal);
            Menu_1.Menu.OpenMainMenu();
        };
        GameCreation.ConfigGameCreation = function () {
            this.CreatePlayer();
            this.CreateMachin();
        };
        GameCreation.CreatePlayer = function () {
            var humanplayer = new HumanPlayer_1.HumanPlayer("player", GameManagement_1.GameManagement.Player);
            this.HumanPlayer = humanplayer;
            humanplayer.Create();
            $("#1").addClass(humanplayer.name);
        };
        GameCreation.CreateMachin = function () {
            var dof = new DynamicObjectFactory_1.DynamicObjectFactory();
            var M1Speed = GameConfig_1.MachinPlayerConfig.speed;
            var M2Speed = GameConfig_1.MachinPlayer2Config.speed;
            debugger;
            var randormNumber = dof.GetProperRandomNumber();
            var machinPlayer = new MachinPlayer_1.MachinPlayer("stevejobs", new ObjectVisual_1.SteveJobsOV(), randormNumber, M1Speed - 8);
            machinPlayer.Create();
            $("#" + randormNumber).addClass(machinPlayer.name);
            machinPlayer.MoveMachin();
            randormNumber = dof.GetProperRandomNumber();
            var machinPlayer3 = new MachinPlayer_1.MachinPlayer("zuckerberg", new ObjectVisual_1.zuckerbergOV(), randormNumber, M1Speed - 15);
            machinPlayer3.Create();
            $("#" + randormNumber).addClass(machinPlayer3.name);
            machinPlayer3.MoveMachin();
            randormNumber = dof.GetProperRandomNumber();
            var machinPlayer4 = new MachinPlayer_1.MachinPlayer("TimCook", new ObjectVisual_2.TimCook(), randormNumber, M1Speed);
            machinPlayer4.Create();
            $("#" + randormNumber).addClass(machinPlayer4.name);
            machinPlayer4.MoveMachin();
            randormNumber = dof.GetProperRandomNumber();
            var machinPlayer5 = new MachinPlayer2_1.MachinPlayer2("sundarPichaiOV", new ObjectVisual_2.sundarPichaiOV(), randormNumber, M2Speed);
            machinPlayer5.Create();
            $("#" + randormNumber).addClass(machinPlayer5.name);
            machinPlayer5.MoveMachin();
            randormNumber = dof.GetProperRandomNumber();
            var machinPlayer2 = new MachinPlayer2_1.MachinPlayer2("linus", new ObjectVisual_1.LinusOV(), randormNumber, M2Speed - 10);
            machinPlayer2.Create();
            $("#" + randormNumber).addClass(machinPlayer2.name);
            machinPlayer2.MoveMachin();
        };
        GameCreation.GoalCount = GameConfig_1.GoalConfig.GoalCount;
        return GameCreation;
    }());
    exports.GameCreation = GameCreation;
});
//# sourceMappingURL=GameCreation.js.map