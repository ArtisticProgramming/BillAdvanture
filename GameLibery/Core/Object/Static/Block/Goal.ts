import { BaseStaticObject } from "./BaseBlock";
import { HtmlAndCss } from "../../../../Utility/HtmlAndCss";
import { KeyValuePair } from '../../../../Utility/KeyValuePair';
import { ObjectUtility } from "../../ObjectUtility";
import { ObjectAttribute } from "../../../General/Enums";
import { ObjectOV } from "../../../../Configuration/ObjectVisual";

export class Goal extends BaseStaticObject {
        
    constructor(name:string,objectVisual:ObjectOV,position:number)
    {
        super(name,objectVisual, position);
    }

    Create()
    {
        super.Create();
        ObjectUtility.AddObjectAttribute(this.position,ObjectAttribute.Goal);
    }
}

