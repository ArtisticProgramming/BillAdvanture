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
        define(["require", "exports", "../../GameObject", "../../ObjectUtility"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameObject_1 = require("../../GameObject");
    var ObjectUtility_1 = require("../../ObjectUtility");
    var BaseBlock = /** @class */ (function (_super) {
        __extends(BaseBlock, _super);
        function BaseBlock(name, objectVisual, position) {
            var _this = _super.call(this) || this;
            _this.name = name;
            _this.position = position;
            _this.ObjectVisual = objectVisual;
            return _this;
        }
        BaseBlock.prototype.Create = function () {
            ObjectUtility_1.ObjectUtility.AppearObject(this.name, this.ObjectVisual);
            $("#" + this.position).addClass(this.name);
            $("#" + this.position).addClass("close");
        };
        return BaseBlock;
    }(GameObject_1.GameObject));
    exports.BaseBlock = BaseBlock;
});
//# sourceMappingURL=BaseBlock.js.map