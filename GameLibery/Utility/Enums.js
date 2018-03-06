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
    var GameLibery;
    (function (GameLibery) {
        var Utility;
        (function (Utility) {
            var Direction;
            (function (Direction) {
                Direction[Direction["Up"] = 38] = "Up";
                Direction[Direction["Down"] = 40] = "Down";
                Direction[Direction["Left"] = 37] = "Left";
                Direction[Direction["Right"] = 39] = "Right";
            })(Direction = Utility.Direction || (Utility.Direction = {}));
        })(Utility = GameLibery.Utility || (GameLibery.Utility = {}));
    })(GameLibery || (GameLibery = {}));
    return GameLibery.Utility;
});
//# sourceMappingURL=Enums.js.map