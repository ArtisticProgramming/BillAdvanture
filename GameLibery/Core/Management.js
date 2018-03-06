(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./GamePlan", "./Object/HumanPlayer", "jquery"], factory);
    }
})(function (require, exports) {
    "use strict";
    var GamePlan = require("./GamePlan");
    var player = require("./Object/HumanPlayer");
    var $ = require("jquery");
    var GameLibery;
    (function (GameLibery) {
        var Management;
        (function (Management_1) {
            var Management = /** @class */ (function () {
                // tslint:disable-next-line:no-empty
                function Management() {
                }
                Management.initialize = function () {
                    // create Game Plan
                    GamePlan.GamePlan.getInstance().CreateChessboardPlan();
                    // tslint:disable-next-line:typedef
                    var humanplayer = new player.HumanPlayer("bill", "billgates.jpg");
                    humanplayer.Create();
                    $("#1").addClass(humanplayer.Name);
                    this.Human = humanplayer;
                };
                return Management;
            }());
            Management_1.Management = Management;
        })(Management = GameLibery.Management || (GameLibery.Management = {}));
    })(GameLibery || (GameLibery = {}));
    return GameLibery.Management;
});
//# sourceMappingURL=Management.js.map