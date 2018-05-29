(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../Configuration/GameConfig", "../../General/GameUtility"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameConfig_1 = require("../../../Configuration/GameConfig");
    var GameUtility_1 = require("../../General/GameUtility");
    var DynamicObjectFactory = /** @class */ (function () {
        function DynamicObjectFactory() {
            this.reservedCellList = new Array();
            for (var i = 1; i < 10; i++) {
                for (var J = 0; J < 10; J++) {
                    this.reservedCellList.push(i + J * GameConfig_1.GamePlanConfig.HorizontalCell);
                }
            }
        }
        DynamicObjectFactory.prototype.GetProperRandomNumber = function () {
            var randomNumber = 0;
            while (randomNumber == 0) {
                var rand = GameUtility_1.GameUtility.GetRandomNumber();
                var result = this.reservedCellList.indexOf(rand);
                if (result > -1) {
                    randomNumber = 0;
                    break;
                }
                else {
                    randomNumber = rand;
                }
            }
            this.reservedCellList.push(randomNumber);
            return randomNumber;
        };
        return DynamicObjectFactory;
    }());
    exports.DynamicObjectFactory = DynamicObjectFactory;
});
//# sourceMappingURL=DynamicObjectFactory.js.map