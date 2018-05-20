import $ = require("jquery");
import {GameCreation} from "./Core/GameCreation"; // require("./GameLibery/Management/Management");
import EventHandlerNs = require("./Utility/EventHandler");



// $ extends $.fn
interface JQueryStatic<TElement extends Node = HTMLElement>  {
    remodal: () => void
}

class Game {
    constructor() {
        EventHandlerNs.EventHandler.RegisterkeyDown();
        EventHandlerNs.EventHandler.RegisterPlayClick();
        GameCreation.initialize();
    }
}
export = Game;
