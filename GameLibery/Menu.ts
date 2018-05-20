import { EventHandler } from "./Utility/EventHandler";
import { CoconutPalmTreeOV } from './Configuration/ObjectVisual';

export class Menu {

    static playModal:jBox;
    static settingModal:jBox;
    static gameOverModal:jBox;
    static winModal:jBox;
    
    static OpenMainMenu():void
    {
        this.playModal = new jBox('Modal', {
                content: $("#gameStart").html(),
                theme: 'ModalBorder',
                closeOnClick:false,
                closeButton:false,
            });
            this.playModal.open();
        EventHandler.RegisterPlayClick();
    }

    static CloseMainMenu():void
    {
        this.playModal.close();
    }

    static OpenSettingMenu():void
    {
        var settingModal;
            settingModal = new jBox('Modal', {
                content: $("#setting").html(),
                title:"Setting",
                draggable: 'title',
                closeButton:true,
                closeOnEsc:true,
                theme: 'ModalBorder',
              });
    }

    static CloseSettingMenu():void
    {
        this.settingModal.close(); 
    }

    
    static OpenGameOverMenu():void
    {
        this.gameOverModal = new jBox('Modal', {
                content: "<img src='../image/gameover2.jpg'>",
                closeButton:true,
                closeOnEsc:true,
                onClose: function() {
                    location.reload();
                }
              });
              this.gameOverModal.open();
        $('.jBox-container').css('background','#040404')
              
    }

    static OpenWinMenu():void
    {
        this.winModal = new jBox('Modal', {
                content: " <img src='../image/.jpg'>",
                closeButton:true,
                closeOnEsc:true,
                onClose: function() {
                    location.reload();
                  }
              });
        this.winModal.open();
    }

}