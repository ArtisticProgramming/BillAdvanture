var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./BaseStaticObject"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseStaticObject_1 = require("./BaseStaticObject");
    var StaticObject = /** @class */ (function (_super) {
        __extends(StaticObject, _super);
        function StaticObject(name, objectVisual, position, objectType) {
            return _super.call(this, name, objectVisual, position, objectType) || this;
        }
        StaticObject.prototype.Create = function () {
            _super.prototype.Create.call(this);
        };
        return StaticObject;
    }(BaseStaticObject_1.BaseStaticObject));
    exports.StaticObject = StaticObject;
});
//# sourceMappingURL=StaticObject.js.map