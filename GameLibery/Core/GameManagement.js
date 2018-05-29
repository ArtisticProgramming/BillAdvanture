(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Object/ObjectUtility", "./General/Enums", "./GameCreation", "../Menu", "../Configuration/ObjectVisual", "../Configuration/GameConfig"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ObjectUtility_1 = require("./Object/ObjectUtility");
    var Enums_1 = require("./General/Enums");
    var GameCreation_1 = require("./GameCreation");
    var Menu_1 = require("../Menu");
    var ObjectVisual_1 = require("../Configuration/ObjectVisual");
    var GameConfig_1 = require("../Configuration/GameConfig");
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
        GameManagement.SelectDegree = function () {
            debugger;
            var result = $("input[name='Degree']:checked").val();
            if (result == "Easy") {
                GameConfig_1.MachinPlayerConfig.speed = 160;
                GameConfig_1.MachinPlayer2Config.speed = 160;
            }
            if (result == "Normal") {
                GameConfig_1.MachinPlayerConfig.speed = 120;
                GameConfig_1.MachinPlayer2Config.speed = 120;
            }
            if (result == "Hard") {
                GameConfig_1.MachinPlayerConfig.speed = 100;
                GameConfig_1.MachinPlayer2Config.speed = 100;
            }
            if (result == "VeryHard") {
                GameConfig_1.MachinPlayerConfig.speed = 80;
                GameConfig_1.MachinPlayer2Config.speed = 80;
            }
        };
        GameManagement.SelectPlayer = function () {
            var result = $("input[name='charchter']:checked").val();
            if (result == "BillGates") {
                GameManagement.Player = new ObjectVisual_1.BillGatesOV();
            }
            else {
                GameManagement.Player = new ObjectVisual_1.SatyaNadella();
            }
        };
        GameManagement.playStartGame = function () {
            if (this.GameIsStarted == true) {
                Menu_1.Menu.CloseMainMenu();
                this.GameStart();
            }
            else {
                Menu_1.Menu.CloseMainMenu();
                Menu_1.Menu.OpenSettingMenu();
            }
        };
        GameManagement.ConfigSettingAndPlay = function () {
            GameCreation_1.GameCreation.ConfigGameCreation();
            Menu_1.Menu.CloseSettingMenu();
            this.GameIsStarted = true;
            this.GameStart();
        };
        GameManagement.Puased = true;
        GameManagement.GameIsStarted = false;
        GameManagement.Player = new ObjectVisual_1.BillGatesOV();
        return GameManagement;
    }());
    exports.GameManagement = GameManagement;
});
//# sourceMappingURL=GameManagement.js.map