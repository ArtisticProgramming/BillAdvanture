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
        define(["require", "exports", "jquery", "../../../../Configuration/GameConfig", "../../../General/Enums", "../../GameObject", "../../ObjectUtility", "../../../GameManagement", "../../../General/GameEvents", "../../../General/GameUtility"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = require("jquery");
    var GameConfig_1 = require("../../../../Configuration/GameConfig");
    var Enums_1 = require("../../../General/Enums");
    var GameObject_1 = require("../../GameObject");
    var ObjectUtility_1 = require("../../ObjectUtility");
    var GameManagement_1 = require("../../../GameManagement");
    var GameEvents_1 = require("../../../General/GameEvents");
    var GameUtility_1 = require("../../../General/GameUtility");
    var BasePlayer = /** @class */ (function (_super) {
        __extends(BasePlayer, _super);
        function BasePlayer(name, objectVisual, playerMovement) {
            var _this = _super.call(this) || this;
            _this._playerMovement = playerMovement;
            _this._playerMovement.currentPosition = GameConfig_1.GamePlayerConfig.HumanPlayerPositionStart;
            _this._playerMovement.name = name;
            _this.name = name;
            _this.ObjectVisual = objectVisual;
            return _this;
        }
        BasePlayer.prototype.Create = function () {
            ObjectUtility_1.ObjectUtility.AppearObject(this.name, this.ObjectVisual);
        };
        BasePlayer.prototype.MoveInDirection = function (dir) {
            switch (dir) {
                case Enums_1.Direction.Right:
                    return this._playerMovement.Right();
                case Enums_1.Direction.Up:
                    return this._playerMovement.Up();
                case Enums_1.Direction.Left:
                    return this._playerMovement.Left();
                case Enums_1.Direction.Down:
                    return this._playerMovement.Down();
            }
        };
        BasePlayer.prototype.Move = function (dir) {
            if (GameManagement_1.GameManagement.Puased == false) {
                var IsplayerMoved = this.MoveInDirection(dir);
                return IsplayerMoved;
            }
            return false;
        };
        BasePlayer.prototype.FindDistenceOfGoals = function (PostionparseId, GoalId) {
            var AllDistenceVertex = [{}];
            var TotalDistence = [];
            var Distence = this.GetDistence(PostionparseId, GoalId);
            return Distence;
        };
        BasePlayer.prototype.GetDistence = function (PockManPostion, GoalPostion) {
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
            return {
                x: Math.abs(horizontalDistence),
                y: Math.abs(VerticalDistence),
                xArrow: X_Arrow,
                yArrow: Y_Arrow
            };
        };
        BasePlayer.prototype.Get_TR_ID = function (element) {
            var Id = $('#' + element).parent('tr').attr('Id');
            return parseInt(Id);
        };
        BasePlayer.prototype.MoveX = function (nearGoal) {
            var direction = GameEvents_1.GameEvents.GetDirection(nearGoal.xArrow);
            var IsMoved = this.Move(direction);
            if (IsMoved) {
                this.CheckNewPostion();
            }
        };
        BasePlayer.prototype.MoveY = function (nearGoal) {
            var direction = GameEvents_1.GameEvents.GetDirection(nearGoal.yArrow);
            var IsMoved = this.Move(direction);
            if (IsMoved) {
                this.CheckNewPostion();
            }
        };
        BasePlayer.prototype.CheckNewPostion = function () {
            var postion = this._playerMovement.currentPosition;
            this.IsPlayerCatched(postion);
        };
        BasePlayer.prototype.IsPlayerCatched = function (position) {
            var result = GameUtility_1.GameUtility.GetAttribute(position, Enums_1.ObjectAttribute.Player);
            if (result !== undefined) {
                GameManagement_1.GameManagement.GameOver();
            }
        };
        return BasePlayer;
    }(GameObject_1.GameObject));
    exports.BasePlayer = BasePlayer;
});
//# sourceMappingURL=BasePlayer.js.map