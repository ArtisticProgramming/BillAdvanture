import { MachinPlayer } from '../Core/Object/Dynamic/Player/MachinPlayer';

export class GamePlanConfig {
    public static RowCounterStart: number = 100000;
    public static CellCounterStart: number = 1;
    public static VerticalCell: number = 40;
    public static HorizontalCell: number = 52;
}

export class GamePlayerConfig {
    public static HumanPlayerPositionStart = 1;
}

export class GoalConfig {
    public static GoalCount = 10;
}
export class CameraConfig {
    public static CameraSpeedVerically = 51;
    public static CameraSpeedHorizontally = 43;
}

export class MachinPlayerConfig{
    public static speed = 110;
}

export class MachinPlayer2Config{
    public static speed = 100;
}