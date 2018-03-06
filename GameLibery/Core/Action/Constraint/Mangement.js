(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../Configuration/GameConfig", "../../General/Enums"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameConfig_1 = require("../../../Configuration/GameConfig");
    var Enums_1 = require("../../General/Enums");
    var Constraint = /** @class */ (function () {
        function Constraint() {
        }
        Constraint.MoveIsPssible = function (postion, Arrow) {
            if (this.IsOutsideOfBoundary(postion, Arrow)) {
                return false;
            }
            return true;
        };
        Constraint.IsOutsideOfBoundary = function (pockManPostionparseId, Arrow) {
            var lastPostion = GameConfig_1.GamePlanConfig.HorizontalCell * GameConfig_1.GamePlanConfig.VerticalCell;
            if (pockManPostionparseId <= 0 || pockManPostionparseId > lastPostion) {
                return true;
            }
            if (Arrow === Enums_1.Direction.Right && pockManPostionparseId %
                GameConfig_1.GamePlanConfig.HorizontalCell === 1) {
                return true;
            }
            else if (Arrow === Enums_1.Direction.Left && pockManPostionparseId %
                GameConfig_1.GamePlanConfig.HorizontalCell === 0) {
                return true;
            }
            return false;
        };
        return Constraint;
    }());
    exports.Constraint = Constraint;
});
//# sourceMappingURL=Mangement.js.map