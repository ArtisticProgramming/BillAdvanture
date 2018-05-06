(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Block/Block", "../../General/GameUtility", "../../../Configuration/GameConfig", "./Block/Goal"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Block_1 = require("./Block/Block");
    var GameUtility_1 = require("../../General/GameUtility");
    var GameConfig_1 = require("../../../Configuration/GameConfig");
    var Goal_1 = require("./Block/Goal");
    var ObjectFactory = /** @class */ (function () {
        function ObjectFactory() {
        }
        ObjectFactory.CreateRandomSingleBlocks = function (count, name, objectVisual) {
            var SingleBlocks = new Array();
            for (var i = 0; i < count; i++) {
                var randomPosotion = ObjectFactory.GetProperRandomNumber();
                var block = new Block_1.Block(name, objectVisual, randomPosotion);
                block.Create();
                SingleBlocks.push(block);
            }
            return SingleBlocks;
        };
        ObjectFactory.CreateRandomSingleGoals = function (count, name, objectVisual) {
            var SingleGoals = new Array();
            for (var i = 0; i < count; i++) {
                var randomPosotion = ObjectFactory.GetProperRandomNumber();
                var goal = new Goal_1.Goal(name, objectVisual, randomPosotion);
                goal.Create();
                SingleGoals.push(goal);
            }
            return SingleGoals;
        };
        ObjectFactory.GetProperRandomNumber = function () {
            var randomNumber = 0;
            var arrNumber = new Array();
            while (randomNumber == 0) {
                arrNumber = new Array();
                var rand = GameUtility_1.GameUtility.GetRandomNumber();
                var left = rand - 1;
                var right = rand + 1;
                var up = rand - GameConfig_1.GamePlanConfig.HorizontalCell;
                var down = rand + GameConfig_1.GamePlanConfig.HorizontalCell;
                var right_Up = up - 1;
                var right_down = down - 1;
                var letf_Up = up + 1;
                var left_down = down + 1;
                arrNumber.push(left, right, up, down
                // ,right_down
                , right_Up, letf_Up
                // ,left_down
                , rand);
                for (var i = 0; i < arrNumber.length; i++) {
                    // var result=$("#"+arrNumber[i]).hasClass('close');
                    var result = this.reservedCellList.indexOf(arrNumber[i]);
                    if (result > -1) {
                        randomNumber = 0;
                        break;
                    }
                    else {
                        randomNumber = rand;
                    }
                }
            }
            this.reservedCellList = this.reservedCellList.concat(arrNumber);
            return randomNumber;
        };
        ObjectFactory.reservedCellList = [1,
            2,
            3,
            1 + GameConfig_1.GamePlanConfig.HorizontalCell,
            2 + GameConfig_1.GamePlanConfig.HorizontalCell,
            3 + GameConfig_1.GamePlanConfig.HorizontalCell];
        return ObjectFactory;
    }());
    exports.ObjectFactory = ObjectFactory;
});
//# sourceMappingURL=ObjectFactory.js.map