(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../General/GameUtility", "../../../Configuration/GameConfig", "./Block/StaticObject"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameUtility_1 = require("../../General/GameUtility");
    var GameConfig_1 = require("../../../Configuration/GameConfig");
    var StaticObject_1 = require("./Block/StaticObject");
    var StaticObjectFactory = /** @class */ (function () {
        function StaticObjectFactory() {
        }
        StaticObjectFactory.CreateRandomSingleBlocks = function (count, name, objectVisual, objectType) {
            var SingleBlocks = new Array();
            for (var i = 0; i < count; i++) {
                var randomPosotion = this.GetProperRandomNumber();
                var block = new StaticObject_1.StaticObject(name, objectVisual, randomPosotion, objectType);
                block.Create();
                SingleBlocks.push(block);
            }
            return SingleBlocks;
        };
        StaticObjectFactory.GetProperRandomNumber = function () {
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
                // ,right_Up
                // ,letf_Up
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
        StaticObjectFactory.reservedCellList = [1,
            2,
            3,
            1 + GameConfig_1.GamePlanConfig.HorizontalCell,
            2 + GameConfig_1.GamePlanConfig.HorizontalCell,
            3 + GameConfig_1.GamePlanConfig.HorizontalCell];
        return StaticObjectFactory;
    }());
    exports.StaticObjectFactory = StaticObjectFactory;
});
//# sourceMappingURL=StaticObjectFactory.js.map