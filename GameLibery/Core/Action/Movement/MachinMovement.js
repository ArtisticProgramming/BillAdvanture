(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../Configuration/GameConfig", "../../General/Enums", "../Constraint/ActionConstraint"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameConfig_1 = require("../../../Configuration/GameConfig");
    var Enums_1 = require("../../General/Enums");
    var ActionConstraint_1 = require("../Constraint/ActionConstraint");
    var MachinMovement = /** @class */ (function () {
        // tslint:disable-next-line:no-empty
        function MachinMovement(name) {
            this.currentPosition = 0;
            this.name = "";
            this.name = name;
        }
        MachinMovement.GetNewPostion = function (direction, position) {
            var newPostion = 0;
            switch (direction) {
                case Enums_1.Direction.Right:
                    newPostion = position + 1;
                    break;
                case Enums_1.Direction.Up:
                    newPostion = position - GameConfig_1.GamePlanConfig.HorizontalCell;
                    break;
                case Enums_1.Direction.Left:
                    newPostion = position - 1;
                    break;
                case Enums_1.Direction.Down:
                    newPostion = position + GameConfig_1.GamePlanConfig.HorizontalCell;
                    break;
            }
            return newPostion;
        };
        MachinMovement.prototype.Up = function () {
            var arrow = Enums_1.Direction.Up;
            var postion = this.currentPosition;
            var newPostion = MachinMovement.GetNewPostion(arrow, postion);
            if (ActionConstraint_1.ActionConstraint.MoveIsPssibleMachin(newPostion, arrow)) {
                this.UpdatePosition(postion, newPostion);
                return true;
            }
            return false;
        };
        MachinMovement.prototype.Down = function () {
            var arrow = Enums_1.Direction.Down;
            var postion = this.currentPosition;
            var newPostion = MachinMovement.GetNewPostion(arrow, postion);
            if (ActionConstraint_1.ActionConstraint.MoveIsPssibleMachin(newPostion, arrow)) {
                this.UpdatePosition(postion, newPostion);
                return true;
            }
            return false;
        };
        MachinMovement.prototype.Left = function () {
            var arrow = Enums_1.Direction.Left;
            var postion = this.currentPosition;
            var newPostion = MachinMovement.GetNewPostion(arrow, postion);
            if (ActionConstraint_1.ActionConstraint.MoveIsPssibleMachin(newPostion, arrow)) {
                this.UpdatePosition(postion, newPostion);
                return true;
            }
            return false;
        };
        MachinMovement.prototype.Right = function () {
            var arrow = Enums_1.Direction.Right;
            var postion = this.currentPosition;
            var newPostion = MachinMovement.GetNewPostion(arrow, postion);
            if (ActionConstraint_1.ActionConstraint.MoveIsPssibleMachin(newPostion, arrow)) {
                this.UpdatePosition(postion, newPostion);
                return true;
            }
            return false;
        };
        MachinMovement.IsDeadLock = function (direction, position) {
            var newPostion = this.GetNewPostion(direction, position);
            if (ActionConstraint_1.ActionConstraint.IsItblock(newPostion, direction)) {
                return true;
            }
            if (ActionConstraint_1.ActionConstraint.IsOutsideOfBoundary(newPostion, direction)) {
                return true;
            }
            return false;
        };
        MachinMovement.prototype.UpdatePosition = function (oldPostion, newPostion) {
            this.currentPosition = newPostion;
            var attribute = Enums_1.ObjectAttribute.BlockMachainPlayer;
            $("#" + oldPostion.toString()).removeAttr(attribute);
            $("#" + newPostion.toString()).attr(attribute, attribute);
            $("#" + oldPostion.toString()).removeClass(this.name);
            $("#" + newPostion.toString()).addClass(this.name);
        };
        return MachinMovement;
    }());
    exports.MachinMovement = MachinMovement;
});
//# sourceMappingURL=MachinMovement.js.map