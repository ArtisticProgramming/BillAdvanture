(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "jquery", "./Object/GamePlan", "./Object/Dynamic/Player/HumanPlayer", "./Object/Dynamic/Player/MachinPlayer", "./Object/Static/ObjectFactory", "./Object/Dynamic/Player/MachinPlayer2", "../Configuration/ObjectVisual", "../Configuration/GameConfig"], factory);
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
    var GameCreation = /** @class */ (function () {
        // tslint:disable-next-line:no-empty
        function GameCreation() {
        }
        GameCreation.initialize = function () {
            GamePlan_1.GamePlan.getInstance().CreateChessboardPlan();
            var humanplayer = new HumanPlayer_1.HumanPlayer("bill", new ObjectVisual_1.BillGatesOV());
            humanplayer.Create();
            $("#1").addClass(humanplayer.name);
            this.HumanPlayer = humanplayer;
            var machinPlayer = new MachinPlayer_1.MachinPlayer("stevejobs", new ObjectVisual_1.SteveJobsOV(), 262);
            machinPlayer.Create();
            $("#262").addClass(machinPlayer.name);
            machinPlayer.MoveMachin();
            var machinPlayer2 = new MachinPlayer2_1.MachinPlayer2("linus", new ObjectVisual_1.LinusOV(), 292);
            machinPlayer2.Create();
            $("#292").addClass(machinPlayer2.name);
            machinPlayer2.MoveMachin();
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(15, 'block', new ObjectVisual_1.FireOV());
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(15, 'block2', new ObjectVisual_1.StoneOV());
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(15, 'block3', new ObjectVisual_1.HoleOV());
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(20, 'block4', new ObjectVisual_1.PineTreeOV());
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(15, 'block5', new ObjectVisual_1.GrassOV());
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(20, 'block6', new ObjectVisual_1.PalmTreeOV());
            ObjectFactory_1.ObjectFactory.CreateRandomSingleBlocks(15, 'block7', new ObjectVisual_1.CoconutPalmTreeOV());
            //------------------------Goals Creation----------------------------
            ObjectFactory_1.ObjectFactory.CreateRandomSingleGoals(this.GoalCount, 'goal', new ObjectVisual_1.GoalOV());
        };
        GameCreation.GoalCount = GameConfig_1.GoalConfig.GoalCount;
        return GameCreation;
    }());
    exports.GameCreation = GameCreation;
});
//# sourceMappingURL=GameCreation.js.map