(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Core/GameCreation", "./Utility/EventHandler"], factory);
    }
})(function (require, exports) {
    "use strict";
    var GameCreation_1 = require("./Core/GameCreation"); // require("./GameLibery/Management/Management");
    var EventHandler_1 = require("./Utility/EventHandler");
    var Game = /** @class */ (function () {
        function Game() {
            EventHandler_1.EventHandler.RegisterEvents();
            GameCreation_1.GameCreation.initialize();
        }
        return Game;
    }());
    return Game;
});
//# sourceMappingURL=Game.js.map