import $ = require("jquery");
import {GameCreation} from "./Core/GameCreation"; // require("./GameLibery/Management/Management");
import {EventHandler} from "./Utility/EventHandler";

class Game {
    constructor() {
       EventHandler.RegisterEvents();
       GameCreation.initialize();
    }
}
export = Game;
