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
    var GameLibery;
    (function (GameLibery) {
        var Configuration;
        (function (Configuration) {
            var GamePlanConfig = /** @class */ (function () {
                function GamePlanConfig() {
                }
                GamePlanConfig.RowCounterStart = 100000;
                GamePlanConfig.CellCounterStart = 1;
                GamePlanConfig.VerticalCell = 25;
                GamePlanConfig.HorizontalCell = 40;
                return GamePlanConfig;
            }());
            Configuration.GamePlanConfig = GamePlanConfig;
            var GamePlayerConfig = /** @class */ (function () {
                function GamePlayerConfig() {
                }
                GamePlayerConfig.HumanPlayerPositionStart = 1;
                return GamePlayerConfig;
            }());
            Configuration.GamePlayerConfig = GamePlayerConfig;
            var CameraConfig = /** @class */ (function () {
                function CameraConfig() {
                }
                CameraConfig.CameraSpeedVerically = 38;
                CameraConfig.CameraSpeedHorizontally = 38;
                return CameraConfig;
            }());
            Configuration.CameraConfig = CameraConfig;
        })(Configuration = GameLibery.Configuration || (GameLibery.Configuration = {}));
    })(GameLibery || (GameLibery = {}));
    return GameLibery.Configuration;
});
//# sourceMappingURL=GamePlanConfig.js.map