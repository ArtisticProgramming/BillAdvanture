(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Object/ObjectUtility", "./General/Enums", "./GameCreation", "../Menu"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ObjectUtility_1 = require("./Object/ObjectUtility");
    var Enums_1 = require("./General/Enums");
    var GameCreation_1 = require("./GameCreation");
    var Menu_1 = require("../Menu");
    var GameManagement = /** @class */ (function () {
        function GameManagement() {
        }
        GameManagement.ReduceGoal = function (position, name) {
            ObjectUtility_1.ObjectUtility.DeleteObject(position, Enums_1.ObjectAttribute.Goal, name);
            GameCreation_1.GameCreation.GoalCount = GameCreation_1.GameCreation.GoalCount - 1;
            if (GameCreation_1.GameCreation.GoalCount == 0) {
                this.PlayerWin();
            }
        };
        GameManagement.PlayerWin = function () {
            this.GameEnd();
            var fucnc = window.setInterval(function () {
                Menu_1.Menu.OpenWinMenu();
                window.clearTimeout(fucnc);
            }, 200);
        };
        GameManagement.GameOver = function () {
            this.GameEnd();
            var fucnc = window.setInterval(function () {
                Menu_1.Menu.OpenGameOverMenu();
                // location.reload();
                window.clearTimeout(fucnc);
            }, 200);
        };
        GameManagement.GamePuased = function () {
            this.Puased = !this.Puased;
            if (this.Puased) {
                Menu_1.Menu.playModal.open();
            }
            else {
                Menu_1.Menu.playModal.close();
            }
        };
        GameManagement.GameEnd = function () {
            this.Puased = true;
        };
        GameManagement.GameStart = function () {
            this.Puased = false;
            this.GameIsStarted = true;
        };
        GameManagement.Puased = true;
        GameManagement.GameIsStarted = false;
        return GameManagement;
    }());
    exports.GameManagement = GameManagement;
});
//# sourceMappingURL=GameManagement.js.map