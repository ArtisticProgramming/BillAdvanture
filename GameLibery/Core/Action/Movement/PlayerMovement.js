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
            }
        };
        PlayerMovement.prototype.Down = function () {
            var arrow = Enums_1.Direction.Down;
            var postion = this.currentPosition;
            var newPostion = postion + GameConfig_1.GamePlanConfig.HorizontalCell;
            if (ActionConstraint_1.ActionConstraint.MoveIsPssible(newPostion, arrow)) {
                this.UpdatePosition(postion, newPostion);
                Camera_1.Camera.getInstance().MoverCamera("bottom", true, GameConfig_1.CameraConfig.CameraSpeedVerically);
            }
        };
        PlayerMovement.prototype.Left = function () {
            debugger;
            var postion = this.currentPosition;
            var newPostion = postion - 1;
            if (ActionConstraint_1.ActionConstraint.MoveIsPssible(newPostion, Enums_1.Direction.Left)) {
                this.UpdatePosition(postion, newPostion);
                Camera_1.Camera.getInstance().MoverCamera("left", true, GameConfig_1.CameraConfig.CameraSpeedHorizontally);
            }
        };
        PlayerMovement.prototype.Right = function () {
            var arrow = Enums_1.Direction.Right;
            var postion = this.currentPosition;
            var newPostion = postion + 1;
            if (ActionConstraint_1.ActionConstraint.MoveIsPssible(newPostion, arrow)) {
                this.UpdatePosition(postion, newPostion);
                Camera_1.Camera.getInstance().MoverCamera("left", false, GameConfig_1.CameraConfig.CameraSpeedHorizontally);
            }
        };
        // Up(): void {
        //     var arrow: Direction = Direction.Up;
        //     var postion: number = this.currentPosition;
        //     let newPostion: number = postion - GamePlanConfig.HorizontalCell;
        //     if (ActionConstraint.MoveIsPssible(newPostion, arrow)) {
        //         this.UpdatePosition(postion, newPostion);
        //         this.updir++;
        //         if(this.updir == this.times){
        //             Camera.getInstance().MoverCamera("bottom", false, CameraConfig.CameraSpeedVerically*this.times);
        //             this.updir=0;
        //         }
        //     }
        // }
        // Down(): void {
        //     var arrow: Direction = Direction.Down;
        //     var postion: number = this.currentPosition;
        //     let newPostion: number = postion + GamePlanConfig.HorizontalCell;
        //     if (ActionConstraint.MoveIsPssible(newPostion, arrow)) {
        //         this.downdir ++;
        //         this.UpdatePosition(postion, newPostion);
        //         if(this.downdir == this.times){
        //         Camera.getInstance().MoverCamera("bottom", true, CameraConfig.CameraSpeedVerically*this.times);
        //         this.downdir=0;
        //     }
        //     }
        // }
        // Left(): void {
        //     debugger;
        //     var postion: number = this.currentPosition;
        //     let newPostion: number = postion - 1;
        //     if (ActionConstraint.MoveIsPssible(newPostion, Direction.Left)) {
        //         this.leftdir++;
        //         this.UpdatePosition(postion, newPostion);
        //         if(this.leftdir == 3){
        //         Camera.getInstance().MoverCamera("left", true, CameraConfig.CameraSpeedHorizontally*this.times);
        //         this.leftdir=0;
        //     }
        //     }
        // }
        // Right(): void {
        //     var arrow: Direction = Direction.Right;
        //     var postion: number = this.currentPosition;
        //     let newPostion: number = postion + 1;
        //     if (ActionConstraint.MoveIsPssible(newPostion, arrow)) {
        //         this.rightdir++;
        //         this.UpdatePosition(postion, newPostion);
        //         if(this.rightdir == this.times){
        //         Camera.getInstance().MoverCamera("left", false, CameraConfig.CameraSpeedHorizontally*this.times);
        //         this.rightdir =0;
        //         }
        //     }
        // }
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