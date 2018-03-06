import $ = require("jquery");
import {GameCreation} from "./Core/GameCreation"; // require("./GameLibery/Management/Management");
import EventHandlerNs = require("./Utility/EventHandler");

class Game {
    constructor() {
        EventHandlerNs.EventHandler.RegisterkeyDown();
        GameCreation.initialize();
    }
}
export = Game;

