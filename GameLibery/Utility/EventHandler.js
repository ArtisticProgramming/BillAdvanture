(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core/GameManagement", "../Core/General/GameEvents"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameManagement_1 = require("../Core/GameManagement");
    var GameEvents = require("../Core/General/GameEvents");
    var EventHandler = /** @class */ (function () {
        function EventHandler() {
        }
        EventHandler.RegisterEvents = function () {
            EventHandler.RegisterkeyDown();
            EventHandler.RegisterPlayClick();
            EventHandler.RegisterChangeCharchter();
            EventHandler.RegisterChangeDegree();
            EventHandler.RegisterConfigSettingAndPlay();
        };
        EventHandler.RegisterkeyDown = function () {
            document.addEventListener("keydown", function (e) {
                var gameEv = new GameEvents.GameEvents();
                gameEv.ManageEvents(e.keyCode);
            });
        };
        EventHandler.RegisterPlayClick = function () {
            $("body").on("click", ".play", function (event) { return GameManagement_1.GameManagement.playStartGame(); });
        };
        EventHandler.RegisterConfigSettingAndPlay = function () {
            $("body").on("click", ".configSettingAndPlay", function (event) { return GameManagement_1.GameManagement.ConfigSettingAndPlay(); });
        };
        EventHandler.RegisterChangeCharchter = function () {
            $("body").on("change", ".charchterRadioBtn", function (event) { return GameManagement_1.GameManagement.SelectPlayer(); });
        };
        EventHandler.RegisterChangeDegree = function () {
            $("body").on("change", ".degreeRadioBtn", function (event) { return GameManagement_1.GameManagement.SelectDegree(); });
        };
        return EventHandler;
    }());
    exports.EventHandler = EventHandler;
});
//# sourceMappingURL=EventHandler.js.map