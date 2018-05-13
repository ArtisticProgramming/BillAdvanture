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
        GamePlanConfig.VerticalCell = 40;
        GamePlanConfig.HorizontalCell = 52;
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
    var GoalConfig = /** @class */ (function () {
        function GoalConfig() {
        }
        GoalConfig.GoalCount = 10;
        return GoalConfig;
    }());
    exports.GoalConfig = GoalConfig;
    var CameraConfig = /** @class */ (function () {
        function CameraConfig() {
        }
        CameraConfig.CameraSpeedVerically = 51;
        CameraConfig.CameraSpeedHorizontally = 43;
        return CameraConfig;
    }());
    exports.CameraConfig = CameraConfig;
    var MachinPlayerConfig = /** @class */ (function () {
        function MachinPlayerConfig() {
        }
        MachinPlayerConfig.speed = 110;
        return MachinPlayerConfig;
    }());
    exports.MachinPlayerConfig = MachinPlayerConfig;
    var MachinPlayer2Config = /** @class */ (function () {
        function MachinPlayer2Config() {
        }
        MachinPlayer2Config.speed = 100;
        return MachinPlayer2Config;
    }());
    exports.MachinPlayer2Config = MachinPlayer2Config;
});
//# sourceMappingURL=GameConfig.js.map