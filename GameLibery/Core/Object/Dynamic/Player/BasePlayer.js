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
        define(["require", "exports", "../../../../Configuration/GameConfig", "../../../General/Enums", "../../GameObject", "../../ObjectUtility"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameConfig_1 = require("../../../../Configuration/GameConfig");
    var Enums_1 = require("../../../General/Enums");
    var GameObject_1 = require("../../GameObject");
    var ObjectUtility_1 = require("../../ObjectUtility");
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
        BasePlayer.prototype.MoverInDirection = function (dir) {
            switch (dir) {
                case Enums_1.Direction.Right:
                    this._playerMovement.Right();
                    break;
                case Enums_1.Direction.Up:
                    this._playerMovement.Up();
                    break;
                case Enums_1.Direction.Left:
                    this._playerMovement.Left();
                    break;
                case Enums_1.Direction.Down:
                    this._playerMovement.Down();
                    break;
            }
        };
        BasePlayer.prototype.Move = function (dir) {
            this.MoverInDirection(dir);
            // var that=this;
            // setTimeout(function(){that.MoverInDirection(dir)}, 0);
        };
        return BasePlayer;
    }(GameObject_1.GameObject));
    exports.BasePlayer = BasePlayer;
});
//# sourceMappingURL=BasePlayer.js.map