(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GamePlanConfig = /** @class */ (function () {
        function GamePlanConfig() {
        }
        GamePlanConfig.RowCounterStart = 100000;
        GamePlanConfig.CellCounterStart = 1;
        GamePlanConfig.VerticalCell = 25;
        GamePlanConfig.HorizontalCell = 41;
        return GamePlanConfig;
    }());
    exports.GamePlanConfig = GamePlanConfig;
    var GamePlayerConfig = /** @class */ (function () {
        function GamePlayerConfig() {
        }
        GamePlayerConfig.HumanPlayerPositionStart = 1;
        return GamePlayerConfig;
    }());
    exports.GamePlayerConfig = GamePlayerConfig;
    var CameraConfig = /** @class */ (function () {
        function CameraConfig() {
        }
        CameraConfig.CameraSpeedVerically = 46;
        CameraConfig.CameraSpeedHorizontally = 38;
        return CameraConfig;
    }());
    exports.CameraConfig = CameraConfig;
});
//# sourceMappingURL=GameConfig.js.map