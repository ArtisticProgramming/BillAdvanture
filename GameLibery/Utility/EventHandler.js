(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core/GameManagement", "../Menu", "../Core/General/GameEvents"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameManagement_1 = require("../Core/GameManagement");
    var Menu_1 = require("../Menu");
    var GameEvents = require("../Core/General/GameEvents");
    var EventHandler = /** @class */ (function () {
        function EventHandler() {
        }
        EventHandler.RegisterkeyDown = function () {
            document.addEventListener("keydown", function (e) {
                // tslint:disable-next-line:typedef
                var gameEv = new GameEvents.GameEvents();
                gameEv.ManageEvents(e.keyCode);
            });
        };
        EventHandler.RegisterPlayClick = function () {
            var _this = this;
            debugger;
            var btn = document.getElementById("play");
            $("body").on("click", ".play", function (event) { return _this.playStartGame(); });
        };
        EventHandler.RegisterSettingClick = function () {
            var _this = this;
            debugger;
            var btn = document.getElementById("setting");
            $("body").on("click", ".setting", function (event) { return _this.configSettingAndPlay(); });
        };
        EventHandler.playStartGame = function () {
            // if (GameManagement.GameIsStarted==true)
            // {
            Menu_1.Menu.CloseMainMenu();
            GameManagement_1.GameManagement.GameStart();
            // }else{
            Menu_1.Menu.CloseMainMenu();
            // Menu.OpenSettingMenu();
            //}
        };
        EventHandler.configSettingAndPlay = function () {
            //config
            Menu_1.Menu.CloseSettingMenu();
            GameManagement_1.GameManagement.GameStart();
        };
        return EventHandler;
    }());
    exports.EventHandler = EventHandler;
});
//# sourceMappingURL=EventHandler.js.map