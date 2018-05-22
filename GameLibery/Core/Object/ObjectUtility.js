(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../Utility/HtmlAndCss"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HtmlAndCss_1 = require("../../Utility/HtmlAndCss");
    var ObjectUtility = /** @class */ (function () {
        function ObjectUtility() {
        }
        ObjectUtility.AppearObject = function (name, objectov) {
            HtmlAndCss_1.HtmlAndCss.CreateAndAppendCssClass(name, objectov.getProperteyList());
        };
        ObjectUtility.AddObjectAttribute = function (position, attribute) {
            $("#" + position.toString()).attr(attribute, attribute);
        };
        ObjectUtility.DeleteObject = function (position, attribute, name) {
            if (name === void 0) { name = ""; }
            if (name == "")
                name = attribute;
            $("#" + position.toString()).removeAttr(attribute);
            $("#" + position.toString()).removeClass(name);
        };
        return ObjectUtility;
    }());
    exports.ObjectUtility = ObjectUtility;
});
//# sourceMappingURL=ObjectUtility.js.map