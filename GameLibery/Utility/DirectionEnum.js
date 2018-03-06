(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var Game;
    (function (Game) {
        var Utility;
        (function (Utility) {
            var Direction;
            (function (Direction) {
                Direction[Direction["Up"] = 39] = "Up";
                Direction[Direction["Down"] = 40] = "Down";
                Direction[Direction["Left"] = 41] = "Left";
                Direction[Direction["Right"] = 42] = "Right";
            })(Direction = Utility.Direction || (Utility.Direction = {}));
        })(Utility = Game.Utility || (Game.Utility = {}));
    })(Game || (Game = {}));
    return Game.Utility;
});
//# sourceMappingURL=DirectionEnum.js.map