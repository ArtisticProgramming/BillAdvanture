(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../Configuration/GameConfig", "../../Object/Camera", "../../General/Enums", "../Constraint/ActionConstraint"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameConfig_1 = require("../../../Configuration/GameConfig");
    var Camera_1 = require("../../Object/Camera");
    var Enums_1 = require("../../General/Enums");
    var ActionConstraint_1 = require("../Constraint/ActionConstraint");
    var PlayerMovement = /** @class */ (function () {
        // tslint:disable-next-line:no-empty
        function PlayerMovement(name) {
            this.currentPosition = 0;
            this.name = "";
            this.name = name;
        }
        // updir=0;
        // downdir=0;
        // leftdir=0;
        // rightdir=0;
        // times= 2;
        PlayerMovement.prototype.Up = function () {
            var arrow = Enums_1.Direction.Up;
            var postion = this.currentPosition;
            var newPostion = postion - GameConfig_1.GamePlanConfig.HorizontalCell;
            if (ActionConstraint_1.ActionConstraint.MoveIsPssible(newPostion, arrow)) {
                this.UpdatePosition(postion, newPostion);
                Camera_1.Camera.getInstance().MoverCamera("bottom", false, GameConfig_1.CameraConfig.CameraSpeedVerically);
                return true;
            }
            return false;
        };
        PlayerMovement.prototype.Down = function () {
            var arrow = Enums_1.Direction.Down;
            var postion = this.currentPosition;
            var newPostion = postion + GameConfig_1.GamePlanConfig.HorizontalCell;
            if (ActionConstraint_1.ActionConstraint.MoveIsPssible(newPostion, arrow)) {
                this.UpdatePosition(postion, newPostion);
                Camera_1.Camera.getInstance().MoverCamera("bottom", true, GameConfig_1.CameraConfig.CameraSpeedVerically);
                return true;
            }
            return false;
        };
        PlayerMovement.prototype.Left = function () {
            var postion = this.currentPosition;
            var newPostion = postion - 1;
            if (ActionConstraint_1.ActionConstraint.MoveIsPssible(newPostion, Enums_1.Direction.Left)) {
                this.UpdatePosition(postion, newPostion);
                Camera_1.Camera.getInstance().MoverCamera("left", true, GameConfig_1.CameraConfig.CameraSpeedHorizontally);
                return true;
            }
            return false;
        };
        PlayerMovement.prototype.Right = function () {
            var arrow = Enums_1.Direction.Right;
            var postion = this.currentPosition;
            var newPostion = postion + 1;
            if (ActionConstraint_1.ActionConstraint.MoveIsPssible(newPostion, arrow)) {
                this.UpdatePosition(postion, newPostion);
                Camera_1.Camera.getInstance().MoverCamera("left", false, GameConfig_1.CameraConfig.CameraSpeedHorizontally);
                return true;
            }
            return false;
        };
        PlayerMovement.prototype.UpdatePosition = function (oldPostion, newPostion) {
            this.currentPosition = newPostion;
            $("#" + oldPostion.toString()).removeClass(this.name);
            $("#" + newPostion.toString()).addClass(this.name);
        };
        return PlayerMovement;
    }());
    exports.PlayerMovement = PlayerMovement;
});
//# sourceMappingURL=PlayerMovement.js.map