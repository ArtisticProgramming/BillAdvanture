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
    Object.defineProperty(exports, "__esModule", { value: true });
    var Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 38] = "Up";
        Direction[Direction["Down"] = 40] = "Down";
        Direction[Direction["Left"] = 37] = "Left";
        Direction[Direction["Right"] = 39] = "Right";
    })(Direction = exports.Direction || (exports.Direction = {}));
    var ObjectAttribute;
    (function (ObjectAttribute) {
        ObjectAttribute["block"] = "block";
        ObjectAttribute["kill"] = "kill";
        ObjectAttribute["Passable"] = "Passable";
        ObjectAttribute["BlockMachainPlayer"] = "BlockMachainPlayer";
    })(ObjectAttribute = exports.ObjectAttribute || (exports.ObjectAttribute = {}));
});
//# sourceMappingURL=Enums.js.map