(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core/General/GameEvents"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
        return EventHandler;
    }());
    exports.EventHandler = EventHandler;
});
//# sourceMappingURL=EventHandler.js.map