(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../Configuration/GameConfig", "../../General/Enums", "../../General/GameUtility"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameConfig_1 = require("../../../Configuration/GameConfig");
    var Enums_1 = require("../../General/Enums");
    var GameUtility_1 = require("../../General/GameUtility");
    var ActionConstraint = /** @class */ (function () {
        function ActionConstraint() {
        }
        ActionConstraint.MoveIsPssible = function (postion, Arrow) {
            if (this.IsOutsideOfBoundary(postion, Arrow))
                return false;
            if (this.CheckAttribute(postion, Enums_1.ObjectAttribute.block))
                return false;
            return true;
        };
        ActionConstraint.IsItblock = function (postion, Arrow) {
            if (this.CheckAttribute(postion, Enums_1.ObjectAttribute.block))
                return false;
            else
                return true;
        };
        ActionConstraint.MoveIsPssibleMachin = function (postion, Arrow) {
            if (this.IsOutsideOfBoundary(postion, Arrow))
                return false;
            if (this.CheckAttribute(postion, Enums_1.ObjectAttribute.BlockMachainPlayer))
                return false;
            if (this.CheckAttribute(postion, Enums_1.ObjectAttribute.block))
                return false;
            return true;
        };
        ActionConstraint.IsOutsideOfBoundary = function (pockManPostionparseId, Arrow) {
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
        ActionConstraint.CheckAttribute = function (postion, attr) {
            var value = GameUtility_1.GameUtility.GetAttribute(postion, attr);
            if (value == null)
                return false;
            else
                return true;
        };
        return ActionConstraint;
    }());
    exports.ActionConstraint = ActionConstraint;
});
//# sourceMappingURL=ActionConstraint.js.map