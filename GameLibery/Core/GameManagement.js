(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Object/ObjectUtility", "./General/Enums", "./GameCreation"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ObjectUtility_1 = require("./Object/ObjectUtility");
    var Enums_1 = require("./General/Enums");
    var GameCreation_1 = require("./GameCreation");
    var GameManagement = /** @class */ (function () {
        function GameManagement() {
        }
        GameManagement.ReduceGoal = function (position) {
            ObjectUtility_1.ObjectUtility.DeleteObject(position, Enums_1.ObjectAttribute.Goal);
            GameCreation_1.GameCreation.GoalCount = GameCreation_1.GameCreation.GoalCount - 1;
            if (GameCreation_1.GameCreation.GoalCount == 0) {
                this.PlayerWin();
            }
        };
        GameManagement.PlayerWin = function () {
            this.GameEnd();
            var fucnc = window.setInterval(function () {
                alert("You Win!");
                location.reload();
                window.clearTimeout(fucnc);
            }, 200);
        };
        GameManagement.GameOver = function () {
            this.GameEnd();
            var fucnc = window.setInterval(function () {
                alert("Game Over!");
                location.reload();
                window.clearTimeout(fucnc);
            }, 200);
        };
        GameManagement.GameEnd = function () {
            this.Puased = true;
        };
        GameManagement.GameStart = function () {
            this.Puased = false;
        };
        GameManagement.Puased = true;
        return GameManagement;
    }());
    exports.GameManagement = GameManagement;
});
//# sourceMappingURL=GameManagement.js.map