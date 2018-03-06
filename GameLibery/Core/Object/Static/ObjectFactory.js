(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Block/Block", "../../General/GameUtility", "../../../Configuration/GameConfig"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Block_1 = require("./Block/Block");
    var GameUtility_1 = require("../../General/GameUtility");
    var GameConfig_1 = require("../../../Configuration/GameConfig");
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
        ObjectFactory.GetProperRandomNumber = function () {
            var randomNumber = 0;
            while (randomNumber == 0) {
                var rand = GameUtility_1.GameUtility.GetRandomNumber();
                var arrNumber = new Array();
                var left = rand - 1;
                var right = rand + 1;
                var up = rand - GameConfig_1.GamePlanConfig.HorizontalCell;
                var down = rand + GameConfig_1.GamePlanConfig.HorizontalCell;
                var right_Up = up - 1;
                var right_down = down - 1;
                var letf_Up = up + 1;
                var left_down = down + 1;
                arrNumber.push(left, right, up, down, right_down, right_Up, letf_Up, left_down);
                for (var i = 0; i < arrNumber.length; i++) {
                    var result = $("#" + arrNumber[i]).hasClass('close');
                    if ((result)) {
                        randomNumber = 0;
                        break;
                    }
                    else {
                        randomNumber = rand;
                    }
                }
            }
            return randomNumber;
        };
        return ObjectFactory;
    }());
    exports.ObjectFactory = ObjectFactory;
});
//# sourceMappingURL=ObjectFactory.js.map