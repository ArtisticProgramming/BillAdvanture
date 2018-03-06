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
    var HtmlAndCss = /** @class */ (function () {
        function HtmlAndCss() {
        }
        HtmlAndCss.CreateAndAppendCssClass = function (className, propertyList) {
            var propertyString = "";
            // tslint:disable-next-line:typedef
            propertyList.forEach(function (element) {
                propertyString = propertyString + " " + element.Name + ":" + element.Value + ";";
            });
            $("<style type='text/css'>" + " ." + className + " { " + propertyString + " } " + "</style>").appendTo("head");
        };
        return HtmlAndCss;
    }());
    exports.HtmlAndCss = HtmlAndCss;
});
//# sourceMappingURL=HtmlAndCss.js.map