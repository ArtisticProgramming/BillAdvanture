(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "jquery", "../Configuration/GamePlanConfig"], factory);
    }
})(function (require, exports) {
    "use strict";
    var $ = require("jquery");
    var config = require("../Configuration/GamePlanConfig");
    var GameLibery;
    (function (GameLibery) {
        var Management;
        (function (Management) {
            var GamePlan = /** @class */ (function () {
                function GamePlan() {
                    if (GamePlan._instance) {
                        throw new Error("Error: Instantiation failed: Use GamePlan.getInstance() instead of new.");
                    }
                    GamePlan._instance = this;
                }
                GamePlan.getInstance = function () {
                    return GamePlan._instance;
                };
                GamePlan.prototype.CreateChessboardPlan = function () {
                    this.Create(config.GamePlanConfig.getInstance());
                };
                GamePlan.prototype.Create = function (conf) {
                    var configObj = config.GamePlanConfig;
                    for (var o = 1; o <= configObj.VerticalCell; o++) {
                        $('#GamePalne').append('<tr id=' + conf.RowCounterStart + '></tr>');
                        for (var i = 1; i <= configObj.HorizontalCell; i++) {
                            $('#' + conf.RowCounterStart).append('<td id=' + conf.CellCounterStart + '></td>');
                            conf.CellCounterStart++;
                        }
                        conf.RowCounterStart++;
                    }
                };
                GamePlan._instance = new GamePlan();
                return GamePlan;
            }());
            Management.GamePlan = GamePlan;
        })(Management = GameLibery.Management || (GameLibery.Management = {}));
    })(GameLibery || (GameLibery = {}));
    return GameLibery.Management;
});
//# sourceMappingURL=GamePlan.js.map