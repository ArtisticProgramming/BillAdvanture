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
        define(["require", "exports", "../../../Action/Movement/PlayerMovement", "../../../General/Enums", "./BasePlayer", "../../../GameCreation", "../../../General/GameUtility", "../../ObjectUtility", "../../../GameManagement"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PlayerMovement_1 = require("../../../Action/Movement/PlayerMovement");
    var Enums_1 = require("../../../General/Enums");
    var BasePlayer_1 = require("./BasePlayer");
    var GameCreation_1 = require("../../../GameCreation");
    var GameUtility_1 = require("../../../General/GameUtility");
    var ObjectUtility_1 = require("../../ObjectUtility");
    var GameManagement_1 = require("../../../GameManagement");
    var HumanPlayer = /** @class */ (function (_super) {
        __extends(HumanPlayer, _super);
        function HumanPlayer(name, objectVisual) {
            var _this = this;
            var player = new PlayerMovement_1.PlayerMovement(name);
            _this = _super.call(this, name, objectVisual, player) || this;
            return _this;
        }
        HumanPlayer.prototype.Create = function () {
            _super.prototype.Create.call(this);
            var postion = GameCreation_1.GameCreation.HumanPlayer._playerMovement.currentPosition;
            ObjectUtility_1.ObjectUtility.AddObjectAttribute(postion, Enums_1.ObjectAttribute.Player);
        };
        HumanPlayer.prototype.Move = function (direction) {
            var IsplayerMoved = _super.prototype.Move.call(this, direction);
            if (IsplayerMoved == true)
                this.CheckNewPostion();
            return IsplayerMoved;
        };
        HumanPlayer.prototype.CheckNewPostion = function () {
            var postion = GameCreation_1.GameCreation.HumanPlayer._playerMovement.currentPosition;
            //check for goal 
            this.CheckForGoal(postion);
            //check for kill
            this.CheckForkill(postion);
            this.CheckCollisionWithMachinPlayer(postion);
        };
        HumanPlayer.prototype.CheckForGoal = function (position) {
            var result = GameUtility_1.GameUtility.GetAttribute(position, Enums_1.ObjectAttribute.Goal);
            if (result !== undefined) {
                var className = GameUtility_1.GameUtility.GetFirstClasss(position);
                GameManagement_1.GameManagement.ReduceGoal(position, className);
            }
        };
        HumanPlayer.prototype.CheckForkill = function (position) {
            var result = GameUtility_1.GameUtility.GetAttribute(position, Enums_1.ObjectAttribute.kill);
            if (result !== undefined) {
                GameManagement_1.GameManagement.GameOver();
            }
        };
        HumanPlayer.prototype.CheckCollisionWithMachinPlayer = function (position) {
            var result = GameUtility_1.GameUtility.GetAttribute(position, Enums_1.ObjectAttribute.BlockMachainPlayer);
            if (result !== undefined) {
                GameManagement_1.GameManagement.GameOver();
            }
        };
        return HumanPlayer;
    }(BasePlayer_1.BasePlayer));
    exports.HumanPlayer = HumanPlayer;
});
//# sourceMappingURL=HumanPlayer.js.map