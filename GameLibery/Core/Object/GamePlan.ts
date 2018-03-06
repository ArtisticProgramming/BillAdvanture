import $ = require("jquery");
import {
    GamePlanConfig
} from "../../Configuration/GameConfig";

export class GamePlan {
    private static _instance: GamePlan = new GamePlan();
    constructor() {
        if (GamePlan._instance) {
            throw new Error("Error: Instantiation failed: Use GamePlan.getInstance() instead of new.");
        }
        GamePlan._instance = this;
    }
    public static getInstance(): GamePlan {
        return GamePlan._instance;
    }

    public CreateChessboardPlan(): void {
        this.Create();
    }

    private Create(): void {
        let cellCounterStart: number = GamePlanConfig.CellCounterStart;
        let rowCounterStart: number = GamePlanConfig.RowCounterStart;
        for (let o: number = 1; o <= GamePlanConfig.VerticalCell; o++) {
            $("#GamePalne").append("<tr id=" + rowCounterStart + "></tr>");
            for (var i: number = 1; i <= GamePlanConfig.HorizontalCell; i++) {
                $("#" + rowCounterStart).append("<td id=" + cellCounterStart + "></td>");
                cellCounterStart++;
            }
            rowCounterStart++;
        }
    }
}