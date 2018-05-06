import {
    GamePlanConfig
} from "../../../Configuration/GameConfig";
import {
    Direction,
    ObjectAttribute
} from "../../General/Enums";
import {
    GameUtility
} from "../../General/GameUtility";

export class ActionConstraint {
    public static MoveIsPssible(postion: number, Arrow: Direction): boolean {
        if (this.IsOutsideOfBoundary(postion, Arrow))
            return false;
        if (this.CheckAttribute(postion, ObjectAttribute.block))
            return false;

        return true;
    }
    
    public static IsItblock(postion: number, Arrow: Direction): boolean {
        if (this.CheckAttribute(postion, ObjectAttribute.block))
            return false;
        else
            return true;
    }

    public static MoveIsPssibleMachin(postion: number, Arrow: Direction): boolean {
        if (this.IsOutsideOfBoundary(postion, Arrow))
            return false;
        if (this.CheckAttribute(postion, ObjectAttribute.BlockMachainPlayer))
            return false;
        if (this.CheckAttribute(postion, ObjectAttribute.block))
            return false;

        return true;
    }

    public static IsOutsideOfBoundary(pockManPostionparseId: number, Arrow: Direction): boolean {
        let lastPostion: number =
            GamePlanConfig.HorizontalCell * GamePlanConfig.VerticalCell;
        if (pockManPostionparseId <= 0 || pockManPostionparseId > lastPostion) {
            return true;
        }
        if (Arrow === Direction.Right && pockManPostionparseId %
            GamePlanConfig.HorizontalCell === 1) {
            return true;
        } else if (Arrow === Direction.Left && pockManPostionparseId %
            GamePlanConfig.HorizontalCell === 0) {
            return true;
        }
        return false;
    }

    static CheckAttribute(postion: number, attr: ObjectAttribute): boolean {
        let value = GameUtility.GetAttribute(postion, attr);
        if (value == null)
            return false;
        else
            return true;
    }
}