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
        define(["require", "exports", "../Utility/KeyValuePair"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KeyValuePair_1 = require("../Utility/KeyValuePair");
    // --------------------------------------------------------------------------------------------------
    var ObjectOV = /** @class */ (function () {
        function ObjectOV() {
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
            _this.photo = 'fire.gif';
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
});
//# sourceMappingURL=ObjectVisual.js.map