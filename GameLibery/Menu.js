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
    var Menu = /** @class */ (function () {
        function Menu() {
        }
        Menu.OpenMainMenu = function () {
            this.playModal = new jBox('Modal', {
                content: $("#gameStart").html(),
                theme: 'ModalBorder',
                closeOnClick: false,
                closeButton: false,
            });
            this.playModal.open();
        };
        Menu.CloseMainMenu = function () {
            this.playModal.close();
        };
        Menu.OpenSettingMenu = function () {
            this.settingModal = new jBox('Modal', {
                content: $("#setting").html(),
                title: "Setting",
                draggable: 'title',
                closeButton: true,
                closeOnEsc: true,
                theme: 'ModalBorder',
            });
            this.settingModal.open();
        };
        Menu.CloseSettingMenu = function () {
            this.settingModal.close();
        };
        Menu.OpenGameOverMenu = function () {
            this.gameOverModal = new jBox('Modal', {
                content: $("#gameover").html(),
                closeButton: true,
                closeOnEsc: true,
                onClose: function () {
                    location.reload();
                }
            });
            this.gameOverModal.open();
            $('.jBox-container').css('background', '#040404');
        };
        Menu.OpenWinMenu = function () {
            this.winModal = new jBox('Modal', {
                content: $("#win").html(),
                closeButton: true,
                closeOnEsc: true,
                onClose: function () {
                    location.reload();
                }
            });
            this.winModal.open();
        };
        return Menu;
    }());
    exports.Menu = Menu;
});
//# sourceMappingURL=Menu.js.map