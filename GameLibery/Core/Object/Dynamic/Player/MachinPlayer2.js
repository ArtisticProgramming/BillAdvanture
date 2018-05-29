var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../General/Enums", "./BasePlayer", "../../../GameCreation", "../../../../Configuration/GameConfig", "../../../General/GameEvents", "../../../Action/Movement/MachinMovement"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Enums_1 = require("../../../General/Enums");
    var BasePlayer_1 = require("./BasePlayer");
    var GameCreation_1 = require("../../../GameCreation");
    var GameConfig_1 = require("../../../../Configuration/GameConfig");
    var GameEvents_1 = require("../../../General/GameEvents");
    var MachinMovement_1 = require("../../../Action/Movement/MachinMovement");
    var MachinPlayer2 = /** @class */ (function (_super) {
        __extends(MachinPlayer2, _super);
        function MachinPlayer2(name, objectVisual, postionId, speed) {
            if (speed === void 0) { speed = GameConfig_1.MachinPlayer2Config.speed; }
            var _this = _super.call(this, name, objectVisual, new MachinMovement_1.MachinMovement(name)) || this;
            _this.speed = 0;
            _this.blocked = false;
            _this._playerMovement.currentPosition = postionId;
            _this.speed = speed;
            return _this;
        }
        MachinPlayer2.prototype.Create = function () {
            _super.prototype.Create.call(this);
        };
        MachinPlayer2.prototype.MoveMachin = function () {
            this.RunIntelligenceMachin(this._playerMovement.currentPosition);
        };
        MachinPlayer2.prototype.RunIntelligenceMachin = function (PostionparseId) {
            var GoalId = GameCreation_1.GameCreation.HumanPlayer._playerMovement.currentPosition;
            var nearGoal = _super.prototype.FindDistenceOfGoals.call(this, PostionparseId, GoalId);
            this.MoveInY(nearGoal);
        };
        MachinPlayer2.prototype.MoveInX = function (nearGoal) {
            var that = this;
            var X_Repeat = nearGoal.x;
            var sss2 = window.setInterval(function () {
                var GoalId = GameCreation_1.GameCreation.HumanPlayer._playerMovement.currentPosition;
                var nearGoalNew = that.FindDistenceOfGoals(that._playerMovement.currentPosition, GoalId);
                if (nearGoalNew.x != nearGoalNew.x) {
                    nearGoal.x = nearGoalNew.x;
                }
                if (nearGoalNew.y != nearGoalNew.y) {
                    nearGoal.y = nearGoalNew.y;
                    X_Repeat = 0;
                }
                if (X_Repeat <= 0) {
                    window.clearTimeout(sss2);
                    that.MoveMachin();
                }
                else {
                    var IsMoved = that.MoveX(nearGoal);
                    X_Repeat--;
                }
                var direction = GameEvents_1.GameEvents.GetDirection(nearGoal.xArrow);
                if (MachinMovement_1.MachinMovement.IsDeadLock(direction, that._playerMovement.currentPosition)) {
                    if (MachinMovement_1.MachinMovement.IsDeadLock(Enums_1.Direction.Left, that._playerMovement.currentPosition) &&
                        MachinMovement_1.MachinMovement.IsDeadLock(Enums_1.Direction.Right, that._playerMovement.currentPosition)) {
                        X_Repeat = 0;
                    }
                }
            }, this.speed);
        };
        MachinPlayer2.prototype.MoveInY = function (nearGoal) {
            var that = this;
            var Y_Repeat = nearGoal.y;
            var sss = window.setInterval(function () {
                var GoalId = GameCreation_1.GameCreation.HumanPlayer._playerMovement.currentPosition;
                var nearGoalNew = that.FindDistenceOfGoals(that._playerMovement.currentPosition, GoalId);
                if (nearGoalNew.x != nearGoalNew.x) {
                    nearGoal.x = nearGoalNew.x;
                }
                if (nearGoalNew.y != nearGoalNew.y) {
                    nearGoal.y = nearGoalNew.y;
                    Y_Repeat = 0;
                }
                if (Y_Repeat <= 0) {
                    window.clearTimeout(sss);
                    that.MoveInX(nearGoal);
                }
                else {
                    var IsMoved = that.MoveY(nearGoal);
                    Y_Repeat--;
                }
                var direction = GameEvents_1.GameEvents.GetDirection(nearGoal.xArrow);
                if (MachinMovement_1.MachinMovement.IsDeadLock(direction, that._playerMovement.currentPosition)) {
                    if (MachinMovement_1.MachinMovement.IsDeadLock(Enums_1.Direction.Up, that._playerMovement.currentPosition) &&
                        MachinMovement_1.MachinMovement.IsDeadLock(Enums_1.Direction.Down, that._playerMovement.currentPosition)) {
                        Y_Repeat = 0;
                    }
                }
            }, this.speed);
        };
        return MachinPlayer2;
    }(BasePlayer_1.BasePlayer));
    exports.MachinPlayer2 = MachinPlayer2;
});
//# sourceMappingURL=MachinPlayer2.js.map