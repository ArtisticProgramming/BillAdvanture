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
    var Camera = /** @class */ (function () {
        // singlton pattern
        function Camera() {
            if (Camera._instance) {
                throw new Error("Error: Instantiation failed: Use GamePlan.getInstance() instead of new.");
            }
            Camera._instance = this;
        }
        Camera.getInstance = function () {
            return Camera._instance;
        };
        Camera.prototype.sleep = function (milliseconds) {
            var start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
                if ((new Date().getTime() - start) > milliseconds) {
                    break;
                }
            }
        };
        Camera.prototype.MoverCamera = function (Arrow, IsIncrese, speed) {
            debugger;
            // tslint:disable-next-line:typedef
            var val = $("#GamePalne").css(Arrow);
            // tslint:disable-next-line:radix
            var newVal = 0;
            if (IsIncrese) {
                newVal = parseInt(val) + speed;
            }
            else {
                newVal = parseInt(val) - speed;
            }
            $("#GamePalne").css(Arrow, newVal);
            // if(Arrow=="left")
            //   $("#GamePalne").animate({ left : newVal+"px" },1000);
            // else
            //   $("#GamePalne").animate({ bottom : newVal+"px" },1000);
            //   this.sleep(1000)
        };
        Camera._instance = new Camera();
        return Camera;
    }());
    exports.Camera = Camera;
});
//# sourceMappingURL=Camera.js.map