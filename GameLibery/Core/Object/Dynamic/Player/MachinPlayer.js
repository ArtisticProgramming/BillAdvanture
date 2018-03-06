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
        define(["require", "exports", "jquery", "../../../General/Enums", "./BasePlayer", "../../../GameCreation", "../../../../Configuration/GameConfig", "../../../General/GameEvents", "../../../Action/Movement/MachinMovement", "../../ObjectUtility"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = require("jquery");
    var Enums_1 = require("../../../General/Enums");
    var BasePlayer_1 = require("./BasePlayer");
    var GameCreation_1 = require("../../../GameCreation");
    var GameConfig_1 = require("../../../../Configuration/GameConfig");
    var GameEvents_1 = require("../../../General/GameEvents");
    var MachinMovement_1 = require("../../../Action/Movement/MachinMovement");
    var ObjectUtility_1 = require("../../ObjectUtility");
    var MachinPlayer = /** @class */ (function (_super) {
        __extends(MachinPlayer, _super);
        function MachinPlayer(name, objectVisual, postionId) {
            var _this = _super.call(this, name, objectVisual, new MachinMovement_1.MachinMovement(name)) || this;
            _this.speed = 150;
            _this.blocked = false;
            _this._playerMovement.currentPosition = postionId;
            return _this;
        }
        MachinPlayer.prototype.Create = function () {
            _super.prototype.Create.call(this);
            ObjectUtility_1.ObjectUtility.AddBlockedAttribute(this._playerMovement.currentPosition, Enums_1.ObjectAttribute.BlockMachainPlayer);
        };
        MachinPlayer.prototype.Move = function (direction) {
            _super.prototype.Move.call(this, direction);
        };
        MachinPlayer.prototype.MoverMachin = function () {
            this.RunIntelligenceMachin(this._playerMovement.currentPosition);
        };
        MachinPlayer.prototype.MoveX = function (nearGoal) {
            var direction = GameEvents_1.GameEvents.GetDirection(nearGoal.xArrow);
            this.Move(direction);
        };
        MachinPlayer.prototype.MoveY = function (nearGoal) {
            var direction = GameEvents_1.GameEvents.GetDirection(nearGoal.yArrow);
            this.Move(direction);
        };
        MachinPlayer.prototype.RunIntelligenceMachin = function (PostionparseId) {
            var nearGoal = this.FindDistenceOfGoals(PostionparseId);
            this.MoveInX(nearGoal);
        };
        MachinPlayer.prototype.MoveInX = function (nearGoal) {
            // Game.intelligence.MoveMachin(nearGoal.yArrow, 'steve')
            var that = this;
            var X_Repeat = nearGoal.x;
            var sss2 = window.setInterval(function () {
                var nearGoalNew = that.FindDistenceOfGoals(that._playerMovement.currentPosition);
                if (nearGoalNew.x != nearGoalNew.x) {
                    nearGoal.x = nearGoalNew.x;
                    X_Repeat = 0;
                }
                if (nearGoalNew.y != nearGoalNew.y) {
                    nearGoal.y = nearGoalNew.y;
                }
                if (X_Repeat <= 0) {
                    window.clearTimeout(sss2);
                    that.MoveInY(nearGoal);
                }
                else {
                    that.MoveX(nearGoal);
                    X_Repeat--;
                }
                var direction = GameEvents_1.GameEvents.GetDirection(nearGoal.xArrow);
                if (MachinMovement_1.MachinMovement.IsDeadLock(direction, that._playerMovement.currentPosition)) {
                    if (MachinMovement_1.MachinMovement.IsDeadLock(Enums_1.Direction.Left, that._playerMovement.currentPosition) &&
                        MachinMovement_1.MachinMovement.IsDeadLock(Enums_1.Direction.Right, that._playerMovement.currentPosition)) {
                        X_Repeat = 0;
                    }
                    //  if(MachinMovement.IsDeadLock(Direction.Up, that._playerMovement.currentPosition ))
                    //  {
                    //       that.Move(Direction.Down)
                    //  }else  
                    //  {
                    //   that.Move(Direction.Up)
                    //  }
                }
            }, this.speed);
        };
        MachinPlayer.prototype.MoveInY = function (nearGoal) {
            var that = this;
            var Y_Repeat = nearGoal.y;
            var sss = window.setInterval(function () {
                var nearGoalNew = that.FindDistenceOfGoals(that._playerMovement.currentPosition);
                if (nearGoalNew.x != nearGoalNew.x) {
                    nearGoal.x = nearGoalNew.x;
                    Y_Repeat = 0;
                }
                if (nearGoalNew.y != nearGoalNew.y) {
                    nearGoal.y = nearGoalNew.y;
                }
                if (Y_Repeat <= 0) {
                    window.clearTimeout(sss);
                    // $('#' + nearGoal.GoalId).removeClass('Goal');
                    // Game.SteveJobsScore = Game.SteveJobsScore + 1;
                    // $('#SteveJobsScore').text(Game.SteveJobsScore);
                    // Game.intelligence.RunIntelligenceMachin(Game.stevePostionparseId);
                    that.MoverMachin();
                }
                else {
                    that.MoveY(nearGoal);
                    Y_Repeat--;
                }
                var direction = GameEvents_1.GameEvents.GetDirection(nearGoal.xArrow);
                if (MachinMovement_1.MachinMovement.IsDeadLock(direction, that._playerMovement.currentPosition)) {
                    if (MachinMovement_1.MachinMovement.IsDeadLock(Enums_1.Direction.Up, that._playerMovement.currentPosition) &&
                        MachinMovement_1.MachinMovement.IsDeadLock(Enums_1.Direction.Down, that._playerMovement.currentPosition)) {
                        Y_Repeat = 0;
                    }
                    //   if(MachinMovement.IsDeadLock(Direction.Right, that._playerMovement.currentPosition ))
                    //   {
                    //        that.Move(Direction.Left)
                    //   }else  
                    //   {
                    //    that.Move(Direction.Right)
                    //   }  
                }
            }, this.speed);
        };
        MachinPlayer.prototype.FindDistenceOfGoals = function (PostionparseId) {
            var AllDistenceVertex = [{}];
            var TotalDistence = [];
            var GoalId = GameCreation_1.GameCreation.HumanPlayer._playerMovement.currentPosition;
            var Distence = this.GetDistence(PostionparseId, GoalId);
            return Distence;
            //     AllDistenceVertex.push({
            //         x: Distence.x, y: Distence.y,
            //         xArrow: Distence.xArrow, yArrow: Distence.yArrow,
            //         GoalId: GoalId, TotalDistence: Distence.x + Distence.y
            //     });
            //     TotalDistence.push(Distence.x + Distence.y);
            // var xs = Math.min.apply(Math, TotalDistence);
            // var nearElement =this.FindElement(AllDistenceVertex, xs);
            // return nearElement;
        };
        MachinPlayer.prototype.GetDistence = function (PockManPostion, GoalPostion) {
            //39 asci code is right;
            //37 asci code is left;
            //38 asci code is up
            //40 asci code is down
            var X_Arrow;
            var Y_Arrow;
            var VerticalDistence = this.Get_TR_ID(GoalPostion) - this.Get_TR_ID(PockManPostion);
            if (VerticalDistence > 0)
                Y_Arrow = Enums_1.Direction.Down;
            else
                Y_Arrow = Enums_1.Direction.Up;
            var horizontalDistence = GoalPostion - Math.abs((PockManPostion + (VerticalDistence * GameConfig_1.GamePlanConfig.HorizontalCell)));
            if (horizontalDistence > 0)
                X_Arrow = Enums_1.Direction.Right;
            else
                X_Arrow = Enums_1.Direction.Left;
            return { x: Math.abs(horizontalDistence), y: Math.abs(VerticalDistence), xArrow: X_Arrow, yArrow: Y_Arrow };
        };
        MachinPlayer.prototype.Get_TR_ID = function (element) {
            var Id = $('#' + element).parent('tr').attr('Id');
            return parseInt(Id);
        };
        MachinPlayer.prototype.FindElement = function (Array, Postion) {
            var target;
            for (var i = 0; i < Array.length; i++) {
                if (Array[i].TotalDistence == Postion) {
                    target = {
                        x: Array[i].x, y: Array[i].y,
                        xArrow: Array[i].xArrow, yArrow: Array[i].yArrow,
                        GoalId: Array[i].GoalId, TotalDistence: Array[i].TotalDistence
                    };
                    break;
                }
            }
            return target;
        };
        return MachinPlayer;
    }(BasePlayer_1.BasePlayer));
    exports.MachinPlayer = MachinPlayer;
});
//# sourceMappingURL=MachinPlayer.js.map