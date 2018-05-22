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
        define(["require", "exports", "../Utility/KeyValuePair", "../Core/General/Enums"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KeyValuePair_1 = require("../Utility/KeyValuePair");
    var Enums_1 = require("../Core/General/Enums");
    // --------------------------------------------------------------------------------------------------
    var ObjectOV = /** @class */ (function () {
        function ObjectOV() {
            this.ObjectType = Enums_1.ObjectAttribute.block;
            this.backgroundSize = 54;
            this.backgroundRepeat = "no-repeat";
            this.backgroundPosition = "center";
            this.photo = this.GetPhotoPath("tree.png");
        }
        ObjectOV.prototype.GetPhotoPath = function (photo) {
            return "url(image/" + photo + ")";
        };
        ObjectOV.prototype.getProperteyList = function () {
            return new Array();
        };
        return ObjectOV;
    }());
    exports.ObjectOV = ObjectOV;
    // --------------------------------------------------------------------------------------------------
    var BillGatesOV = /** @class */ (function (_super) {
        __extends(BillGatesOV, _super);
        function BillGatesOV() {
            var _this = _super.call(this) || this;
            _this.photo = "billgates2.png";
            _this.backgroundSize = 56;
            return _this;
        }
        BillGatesOV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return BillGatesOV;
    }(ObjectOV));
    exports.BillGatesOV = BillGatesOV;
    var AndresOV = /** @class */ (function (_super) {
        __extends(AndresOV, _super);
        function AndresOV() {
            var _this = _super.call(this) || this;
            _this.photo = "anders.png";
            _this.backgroundSize = 56;
            return _this;
        }
        AndresOV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return AndresOV;
    }(ObjectOV));
    exports.AndresOV = AndresOV;
    // --------------------------------------------------------------------------------------------------
    var SteveJobsOV = /** @class */ (function (_super) {
        __extends(SteveJobsOV, _super);
        function SteveJobsOV() {
            var _this = _super.call(this) || this;
            _this.photo = "2.png";
            _this.backgroundSize = 47;
            return _this;
        }
        SteveJobsOV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return SteveJobsOV;
    }(ObjectOV));
    exports.SteveJobsOV = SteveJobsOV;
    // --------------------------------------------------------------------------------------------------
    var LinusOV = /** @class */ (function (_super) {
        __extends(LinusOV, _super);
        function LinusOV() {
            var _this = _super.call(this) || this;
            _this.photo = "linus.png";
            _this.backgroundSize = 47;
            return _this;
        }
        LinusOV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return LinusOV;
    }(ObjectOV));
    exports.LinusOV = LinusOV;
    // --------------------------------------------------------------------------------------------------
    var PineTreeOV = /** @class */ (function (_super) {
        __extends(PineTreeOV, _super);
        function PineTreeOV() {
            var _this = _super.call(this) || this;
            _this.photo = "tree.png";
            _this.backgroundSize = 61;
            _this.backgroundPosition = "bottom";
            return _this;
        }
        PineTreeOV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return PineTreeOV;
    }(ObjectOV));
    exports.PineTreeOV = PineTreeOV;
    // --------------------------------------------------------------------------------------------------
    var PalmTreeOV = /** @class */ (function (_super) {
        __extends(PalmTreeOV, _super);
        function PalmTreeOV() {
            var _this = _super.call(this) || this;
            _this.photo = "tree3.png";
            _this.backgroundSize = 57;
            return _this;
        }
        PalmTreeOV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return PalmTreeOV;
    }(ObjectOV));
    exports.PalmTreeOV = PalmTreeOV;
    // --------------------------------------------------------------------------------------------------
    var CoconutPalmTreeOV = /** @class */ (function (_super) {
        __extends(CoconutPalmTreeOV, _super);
        function CoconutPalmTreeOV() {
            var _this = _super.call(this) || this;
            _this.photo = "tree5.png";
            _this.backgroundSize = 61;
            _this.backgroundPosition = "top";
            return _this;
        }
        CoconutPalmTreeOV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return CoconutPalmTreeOV;
    }(ObjectOV));
    exports.CoconutPalmTreeOV = CoconutPalmTreeOV;
    // --------------------------------------------------------------------------------------------------
    var FireOV = /** @class */ (function (_super) {
        __extends(FireOV, _super);
        function FireOV() {
            var _this = _super.call(this) || this;
            _this.photo = 'fire.gif',
                _this.ObjectType = Enums_1.ObjectAttribute.kill;
            return _this;
        }
        FireOV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return FireOV;
    }(ObjectOV));
    exports.FireOV = FireOV;
    // --------------------------------------------------------------------------------------------------
    var HoleOV = /** @class */ (function (_super) {
        __extends(HoleOV, _super);
        function HoleOV() {
            var _this = _super.call(this) || this;
            _this.photo = 'hole.png';
            _this.backgroundSize = 148;
            return _this;
        }
        HoleOV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return HoleOV;
    }(ObjectOV));
    exports.HoleOV = HoleOV;
    // --------------------------------------------------------------------------------------------------
    var StoneOV = /** @class */ (function (_super) {
        __extends(StoneOV, _super);
        function StoneOV() {
            var _this = _super.call(this) || this;
            _this.photo = 'stone.png';
            _this.backgroundSize = 60;
            return _this;
        }
        StoneOV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return StoneOV;
    }(ObjectOV));
    exports.StoneOV = StoneOV;
    // --------------------------------------------------------------------------------------------------
    var GrassOV = /** @class */ (function (_super) {
        __extends(GrassOV, _super);
        function GrassOV() {
            var _this = _super.call(this) || this;
            _this.photo = 'grass.png';
            _this.backgroundPosition = "bottom";
            return _this;
        }
        GrassOV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return GrassOV;
    }(ObjectOV));
    exports.GrassOV = GrassOV;
    // ----------------------------------------------GOAL----------------------------------------------------
    var GoalOV = /** @class */ (function (_super) {
        __extends(GoalOV, _super);
        function GoalOV() {
            var _this = _super.call(this) || this;
            _this.photo = 'MicrosoftIcons.png';
            _this.backgroundPosition = "-7px -12px";
            _this.ObjectType = Enums_1.ObjectAttribute.Goal;
            _this.backgroundSize = 480;
            return _this;
        }
        GoalOV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return GoalOV;
    }(ObjectOV));
    exports.GoalOV = GoalOV;
    // ----------------------------------------------GOAL2----------------------------------------------------
    var Goal2OV = /** @class */ (function (_super) {
        __extends(Goal2OV, _super);
        function Goal2OV() {
            var _this = _super.call(this) || this;
            _this.photo = 'MicrosoftIcons.png';
            _this.backgroundPosition = "-9px -98px";
            _this.ObjectType = Enums_1.ObjectAttribute.Goal;
            _this.backgroundSize = 480;
            return _this;
        }
        Goal2OV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return Goal2OV;
    }(ObjectOV));
    exports.Goal2OV = Goal2OV;
    // ----------------------------------------------GOAL3----------------------------------------------------
    var Goal3OV = /** @class */ (function (_super) {
        __extends(Goal3OV, _super);
        function Goal3OV() {
            var _this = _super.call(this) || this;
            _this.photo = 'MicrosoftIcons.png';
            _this.backgroundPosition = "-8px -175px";
            _this.ObjectType = Enums_1.ObjectAttribute.Goal;
            _this.backgroundSize = 480;
            return _this;
        }
        Goal3OV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return Goal3OV;
    }(ObjectOV));
    exports.Goal3OV = Goal3OV;
    // ----------------------------------------------GOAL4----------------------------------------------------
    var Goal4OV = /** @class */ (function (_super) {
        __extends(Goal4OV, _super);
        function Goal4OV() {
            var _this = _super.call(this) || this;
            _this.photo = 'MicrosoftIcons.png';
            _this.backgroundPosition = "-230px -10px";
            _this.ObjectType = Enums_1.ObjectAttribute.Goal;
            _this.backgroundSize = 480;
            return _this;
        }
        Goal4OV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return Goal4OV;
    }(ObjectOV));
    exports.Goal4OV = Goal4OV;
    // ----------------------------------------------GOAL5----------------------------------------------------
    var Goal5OV = /** @class */ (function (_super) {
        __extends(Goal5OV, _super);
        function Goal5OV() {
            var _this = _super.call(this) || this;
            _this.photo = 'MicrosoftIcons.png';
            _this.backgroundPosition = "-360px -128px";
            _this.ObjectType = Enums_1.ObjectAttribute.Goal;
            _this.backgroundSize = 563;
            return _this;
        }
        Goal5OV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return Goal5OV;
    }(ObjectOV));
    exports.Goal5OV = Goal5OV;
    // ----------------------------------------------GOAL6----------------------------------------------------
    var Goal6OV = /** @class */ (function (_super) {
        __extends(Goal6OV, _super);
        function Goal6OV() {
            var _this = _super.call(this) || this;
            _this.photo = 'MicrosoftIcons.png';
            _this.backgroundPosition = "-220px -175px";
            _this.ObjectType = Enums_1.ObjectAttribute.Goal;
            _this.backgroundSize = 480;
            return _this;
        }
        Goal6OV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return Goal6OV;
    }(ObjectOV));
    exports.Goal6OV = Goal6OV;
    // ----------------------------------------------GOAL7----------------------------------------------------
    var Goal7OV = /** @class */ (function (_super) {
        __extends(Goal7OV, _super);
        function Goal7OV() {
            var _this = _super.call(this) || this;
            _this.photo = 'MicrosoftIcons.png';
            _this.backgroundPosition = "-301px -253px";
            _this.ObjectType = Enums_1.ObjectAttribute.Goal;
            _this.backgroundSize = 480;
            return _this;
        }
        Goal7OV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return Goal7OV;
    }(ObjectOV));
    exports.Goal7OV = Goal7OV;
    // ----------------------------------------------GOAL8----------------------------------------------------
    var Goal8OV = /** @class */ (function (_super) {
        __extends(Goal8OV, _super);
        function Goal8OV() {
            var _this = _super.call(this) || this;
            _this.photo = 'MicrosoftIcons.png';
            _this.backgroundPosition = "-153px -96px";
            _this.ObjectType = Enums_1.ObjectAttribute.Goal;
            _this.backgroundSize = 480;
            return _this;
        }
        Goal8OV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return Goal8OV;
    }(ObjectOV));
    exports.Goal8OV = Goal8OV;
    // ----------------------------------------------GOAL9----------------------------------------------------
    var Goal9OV = /** @class */ (function (_super) {
        __extends(Goal9OV, _super);
        function Goal9OV() {
            var _this = _super.call(this) || this;
            _this.photo = 'MicrosoftIcons.png';
            _this.backgroundPosition = "-258px -119px";
            _this.ObjectType = Enums_1.ObjectAttribute.Goal;
            _this.backgroundSize = 527;
            return _this;
        }
        Goal9OV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return Goal9OV;
    }(ObjectOV));
    exports.Goal9OV = Goal9OV;
    // ----------------------------------------------GOAL10----------------------------------------------------
    var Goal10OV = /** @class */ (function (_super) {
        __extends(Goal10OV, _super);
        function Goal10OV() {
            var _this = _super.call(this) || this;
            _this.photo = 'MicrosoftIcons.png';
            _this.backgroundPosition = "-94px -208px";
            _this.ObjectType = Enums_1.ObjectAttribute.Goal;
            _this.backgroundSize = 548;
            return _this;
        }
        Goal10OV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return Goal10OV;
    }(ObjectOV));
    exports.Goal10OV = Goal10OV;
    // ----------------------------------------------GOAL11----------------------------------------------------
    var Goal11OV = /** @class */ (function (_super) {
        __extends(Goal11OV, _super);
        function Goal11OV() {
            var _this = _super.call(this) || this;
            _this.photo = 'MicrosoftIcons.png';
            _this.backgroundPosition = "-178px -209px";
            _this.ObjectType = Enums_1.ObjectAttribute.Goal;
            _this.backgroundSize = 542;
            return _this;
        }
        Goal11OV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return Goal11OV;
    }(ObjectOV));
    exports.Goal11OV = Goal11OV;
    // ----------------------------------------------GOAL12----------------------------------------------------
    var Goal12OV = /** @class */ (function (_super) {
        __extends(Goal12OV, _super);
        function Goal12OV() {
            var _this = _super.call(this) || this;
            _this.photo = 'MicrosoftIcons.png';
            _this.backgroundPosition = "-347px -209px";
            _this.ObjectType = Enums_1.ObjectAttribute.Goal;
            _this.backgroundSize = 544;
            return _this;
        }
        Goal12OV.prototype.getProperteyList = function () {
            var properteyList = new Array();
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-repeat", this.backgroundRepeat));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-position", this.backgroundPosition));
            properteyList.push(new KeyValuePair_1.KeyValuePair("background-size", this.backgroundSize + "px"));
            return properteyList;
        };
        return Goal12OV;
    }(ObjectOV));
    exports.Goal12OV = Goal12OV;
});
//# sourceMappingURL=ObjectVisual.js.map