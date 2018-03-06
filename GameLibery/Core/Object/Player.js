(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../Configuration/GameConfig", "../Enums", "../../Utility/KeyValuePair", "../../Utility/HtmlAndCss"], factory);
    }
})(function (require, exports) {
    "use strict";
    var GameConfig_1 = require("../../Configuration/GameConfig");
    var Enums_1 = require("../Enums");
    var KeyValuePair_1 = require("../../Utility/KeyValuePair");
    var HtmlAndCss_1 = require("../../Utility/HtmlAndCss");
    var GameLibery;
    (function (GameLibery) {
        var Management;
        (function (Management) {
            var Object;
            (function (Object) {
                var Player = /** @class */ (function () {
                    function Player(name, photo, playerMovement) {
                        this.backgroundSize = 54;
                        this.backgroundRepeat = "no-repeat";
                        this.backgroundPosition = "center";
                        this.Name = name;
                        this.Photo = photo;
                        this._playerMovement = playerMovement;
                        this._playerMovement.currentPosition = GameConfig_1.GamePlayerConfig.HumanPlayerPositionStart;
                        this._playerMovement.name = this.Name;
                    }
                    Player.prototype.Create = function () {
                        var properteyList = new Array();
                        properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", "url(image/" + this.Photo + ")"));
                        properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
                        properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
                        properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize.toString() + "px"));
                        HtmlAndCss_1.HtmlAndCss.CreateAndAppendCssClass(this.Name, properteyList);
                    };
                    Player.prototype.Move = function (dir) {
                        switch (dir) {
                            case Enums_1.Direction.Right:
                                this._playerMovement.Right();
                                break;
                            case Enums_1.Direction.Up:
                                this._playerMovement.Up();
                                break;
                            case Enums_1.Direction.Left:
                                this._playerMovement.Left();
                                break;
                            case Enums_1.Direction.Down:
                                this._playerMovement.Down();
                                break;
                        }
                    };
                    return Player;
                }());
                Object.Player = Player;
            })(Object = Management.Object || (Management.Object = {}));
        })(Management = GameLibery.Management || (GameLibery.Management = {}));
    })(GameLibery || (GameLibery = {}));
    return GameLibery.Management.Object;
});
//# sourceMappingURL=Player.js.map