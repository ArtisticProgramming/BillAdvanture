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
        define(["require", "exports", "../Action/PlayerMovement", "./Player"], factory);
    }
})(function (require, exports) {
    "use strict";
    var PlayerMovement_1 = require("../Action/PlayerMovement");
    var Player_1 = require("./Player");
    var GameLibery;
    (function (GameLibery) {
        var Management;
        (function (Management) {
            var Object;
            (function (Object) {
                var HumanPlayer = /** @class */ (function (_super) {
                    __extends(HumanPlayer, _super);
                    function HumanPlayer(name, photo) {
                        var _this = this;
                        var player = new PlayerMovement_1.PlayerMovement(name);
                        _this = _super.call(this, name, photo, player) || this;
                        return _this;
                    }
                    HumanPlayer.prototype.Create = function () {
                        _super.prototype.Create.call(this);
                    };
                    HumanPlayer.prototype.Move = function (direction) {
                        _super.prototype.Move.call(this, direction);
                    };
                    return HumanPlayer;
                }(Player_1.Player));
                Object.HumanPlayer = HumanPlayer;
            })(Object = Management.Object || (Management.Object = {}));
        })(Management = GameLibery.Management || (GameLibery.Management = {}));
    })(GameLibery || (GameLibery = {}));
    return GameLibery.Management.Object;
});
//# sourceMappingURL=EnemyPlayer.js.map