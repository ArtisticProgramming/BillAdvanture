import { BaseStaticObject } from "./BaseStaticObject";
import { HtmlAndCss } from "../../../../Utility/HtmlAndCss";
import { KeyValuePair } from '../../../../Utility/KeyValuePair';
import { ObjectUtility } from "../../ObjectUtility";
import { ObjectAttribute } from "../../../General/Enums";
import { ObjectOV } from "../../../../Configuration/ObjectVisual";

export class StaticObject extends BaseStaticObject {       
    constructor(name:string,objectVisual:ObjectOV,position:number,objectType:ObjectAttribute)
    {
        super(name,objectVisual, position,objectType);
    }

    Create()
    {
        super.Create();
    }
}

