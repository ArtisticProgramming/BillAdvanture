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
        define(["require", "exports", "jquery", "../../../Action/Movement/PlayerMovement", "./BasePlayer", "../../../../Configuration/GameConfig"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = require("jquery");
    var PlayerMovement_1 = require("../../../Action/Movement/PlayerMovement");
    var BasePlayer_1 = require("./BasePlayer");
    var GameConfig_1 = require("../../../../Configuration/GameConfig");
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
            $("#1").addClass("close");
            $("#2").addClass("close");
            $("#3").addClass("close");
            $("#" + 1 + GameConfig_1.GamePlanConfig.HorizontalCell).addClass("close");
            $("#" + 2 + GameConfig_1.GamePlanConfig.HorizontalCell).addClass("close");
            $("#" + 3 + GameConfig_1.GamePlanConfig.HorizontalCell).addClass("close");
            $("#" + 1 + GameConfig_1.GamePlanConfig.HorizontalCell * 2).addClass("close");
            $("#" + 2 + GameConfig_1.GamePlanConfig.HorizontalCell * 2).addClass("close");
            $("#" + 3 + GameConfig_1.GamePlanConfig.HorizontalCell * 2).addClass("close");
        };
        HumanPlayer.prototype.Move = function (direction) {
            _super.prototype.Move.call(this, direction);
        };
        return HumanPlayer;
    }(BasePlayer_1.BasePlayer));
    exports.HumanPlayer = HumanPlayer;
});
//# sourceMappingURL=HumanPlayer.js.map