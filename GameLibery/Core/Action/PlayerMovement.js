(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "jquery", "../../Configuration/GameConfig", "../Object/Camera", "../Constraint/Mangement", "../Enums"], factory);
    }
})(function (require, exports) {
    "use strict";
    var $ = require("jquery");
    var GameConfig_1 = require("../../Configuration/GameConfig");
    var Camera_1 = require("../Object/Camera");
    var Mangement_1 = require("../Constraint/Mangement");
    var Enums_1 = require("../Enums");
    var GameLibery;
    (function (GameLibery) {
        var Management;
        (function (Management) {
            var Action;
            (function (Action) {
                var PlayerMovement = /** @class */ (function () {
                    // tslint:disable-next-line:no-empty
                    function PlayerMovement(name) {
                        this.currentPosition = 0;
                        this.name = "";
                        this.name = name;
                    }
                    PlayerMovement.prototype.Up = function () {
                        var arrow = Enums_1.Direction.Up;
                        var postion = this.currentPosition;
                        var newPostion = postion - GameConfig_1.GamePlanConfig.HorizontalCell;
                        if (Mangement_1.Constraint.MoveIsPssible(newPostion, arrow)) {
                            this.UpdatePosition(postion, newPostion);
                            Camera_1.Camera.getInstance().MoverCamera("bottom", false, GameConfig_1.CameraConfig.CameraSpeedVerically);
                        }
                    };
                    PlayerMovement.prototype.Down = function () {
                        var arrow = Enums_1.Direction.Down;
                        var postion = this.currentPosition;
                        var newPostion = postion + GameConfig_1.GamePlanConfig.HorizontalCell;
                        if (Mangement_1.Constraint.MoveIsPssible(newPostion, arrow)) {
                            this.UpdatePosition(postion, newPostion);
                            Camera_1.Camera.getInstance().MoverCamera("bottom", true, GameConfig_1.CameraConfig.CameraSpeedVerically);
                        }
                    };
                    PlayerMovement.prototype.Left = function () {
                        var postion = this.currentPosition;
                        var newPostion = postion - 1;
                        if (Mangement_1.Constraint.MoveIsPssible(newPostion, Enums_1.Direction.Left)) {
                            this.UpdatePosition(postion, newPostion);
                            Camera_1.Camera.getInstance().MoverCamera("left", true, GameConfig_1.CameraConfig.CameraSpeedHorizontally);
                        }
                    };
                    PlayerMovement.prototype.Right = function () {
                        var arrow = Enums_1.Direction.Right;
                        var postion = this.currentPosition;
                        var newPostion = postion + 1;
                        if (Mangement_1.Constraint.MoveIsPssible(newPostion, arrow)) {
                            this.UpdatePosition(postion, newPostion);
                            Camera_1.Camera.getInstance().MoverCamera("left", false, GameConfig_1.CameraConfig.CameraSpeedHorizontally);
                        }
                    };
                    PlayerMovement.prototype.UpdatePosition = function (oldPostion, newPostion) {
                        this.currentPosition = newPostion;
                        $("#" + oldPostion.toString()).removeClass(this.name);
                        $("#" + newPostion.toString()).addClass(this.name);
                    };
                    return PlayerMovement;
                }());
                Action.PlayerMovement = PlayerMovement;
            })(Action = Management.Action || (Management.Action = {}));
        })(Management = GameLibery.Management || (GameLibery.Management = {}));
    })(GameLibery || (GameLibery = {}));
    return GameLibery.Management.Action;
});
//# sourceMappingURL=PlayerMovement.js.map