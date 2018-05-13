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
    var Music = /** @class */ (function () {
        function Music() {
        }
        Music.playAudio = function () {
            this.MusicFile.play();
        };
        Music.pauseAudio = function () {
            this.MusicFile.pause();
        };
        Music.MusicFile = document.getElementById("audio");
        return Music;
    }());
    exports.Music = Music;
});
//# sourceMappingURL=Music.js.map