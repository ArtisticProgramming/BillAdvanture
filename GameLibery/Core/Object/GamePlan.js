(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "jquery", "../../Configuration/GameConfig"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = require("jquery");
    var GameConfig_1 = require("../../Configuration/GameConfig");
    var GamePlan = /** @class */ (function () {
        function GamePlan() {
            if (GamePlan._instance) {
                throw new Error("Error: Instantiation failed: Use GamePlan.getInstance() instead of new.");
            }
            GamePlan._instance = this;
        }
        GamePlan.getInstance = function () {
            return GamePlan._instance;
        };
        GamePlan.prototype.CreateChessboardPlan = function () {
            this.Create();
        };
        GamePlan.prototype.Create = function () {
            var cellCounterStart = GameConfig_1.GamePlanConfig.CellCounterStart;
            var rowCounterStart = GameConfig_1.GamePlanConfig.RowCounterStart;
            for (var o = 1; o <= GameConfig_1.GamePlanConfig.VerticalCell; o++) {
                $("#GamePalne").append("<tr id=" + rowCounterStart + "></tr>");
                for (var i = 1; i <= GameConfig_1.GamePlanConfig.HorizontalCell; i++) {
                    $("#" + rowCounterStart).append("<td id=" + cellCounterStart + "></td>");
                    cellCounterStart++;
                }
                rowCounterStart++;
            }
        };
        GamePlan._instance = new GamePlan();
        return GamePlan;
    }());
    exports.GamePlan = GamePlan;
});
//# sourceMappingURL=GamePlan.js.map