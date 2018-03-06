(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core/GameCreation", "./Enums"], factory);
    }
})(function (require, exports) {
    "use strict";
    var GameCreation_1 = require("../Core/GameCreation");
    var Enums_1 = require("./Enums");
    var GameLibery;
    (function (GameLibery) {
        var Management;
        (function (Management) {
            var GameEvents = /** @class */ (function () {
                // tslint:disable-next-line:no-empty
                function GameEvents() {
                }
                GameEvents.prototype.ManageEvents = function (keyCode) {
                    this.ProccessDirectionEvent(keyCode);
                };
                GameEvents.prototype.ProccessDirectionEvent = function (keyCode) {
                    // tslint:disable-next-line:typedef
                    var directionString = Enums_1.Direction[keyCode];
                    if (directionString != null) {
                        var direction = Enums_1.Direction[directionString];
                        GameCreation_1.GameCreation.Human.Move(direction);
                    }
                };
                return GameEvents;
            }());
            Management.GameEvents = GameEvents;
        })(Management = GameLibery.Management || (GameLibery.Management = {}));
    })(GameLibery || (GameLibery = {}));
    return GameLibery.Management;
});
//# sourceMappingURL=GameEvents.js.map