(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../Configuration/GameConfig"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameConfig_1 = require("../../Configuration/GameConfig");
    var GameUtility = /** @class */ (function () {
        function GameUtility() {
        }
        GameUtility.GetRandomNumber = function () {
            return Math.floor((Math.random() * (GameConfig_1.GamePlanConfig.HorizontalCell * GameConfig_1.GamePlanConfig.VerticalCell) + 1));
        };
        GameUtility.GetAttribute = function (position, attr) {
            var value = $("#" + position.toString()).attr(attr);
            return value;
        };
        return GameUtility;
    }());
    exports.GameUtility = GameUtility;
});
//# sourceMappingURL=GameUtility.js.map