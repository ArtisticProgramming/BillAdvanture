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
        define(["require", "exports", "./BaseBlock", "../../ObjectUtility", "../../../General/Enums"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseBlock_1 = require("./BaseBlock");
    var ObjectUtility_1 = require("../../ObjectUtility");
    var Enums_1 = require("../../../General/Enums");
    var Goal = /** @class */ (function (_super) {
        __extends(Goal, _super);
        function Goal(name, objectVisual, position) {
            return _super.call(this, name, objectVisual, position) || this;
        }
        Goal.prototype.Create = function () {
            _super.prototype.Create.call(this);
            ObjectUtility_1.ObjectUtility.AddObjectAttribute(this.position, Enums_1.ObjectAttribute.Goal);
        };
        return Goal;
    }(BaseBlock_1.BaseStaticObject));
    exports.Goal = Goal;
});
//# sourceMappingURL=Goal.js.map