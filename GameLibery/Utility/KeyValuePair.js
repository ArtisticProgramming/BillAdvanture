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
    var KeyValuePair = /** @class */ (function () {
        function KeyValuePair(name, value) {
            this.Name = name;
            this.Value = value;
        }
        return KeyValuePair;
    }());
    exports.KeyValuePair = KeyValuePair;
});
//# sourceMappingURL=KeyValuePair.js.map