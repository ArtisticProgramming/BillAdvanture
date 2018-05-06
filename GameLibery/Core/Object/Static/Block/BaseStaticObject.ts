import { GameObject } from "../../GameObject";
import { ObjectUtility } from "../../ObjectUtility";
import { ObjectOV } from "../../../../Configuration/ObjectVisual";
import { ObjectAttribute } from "../../../General/Enums";

export class BaseStaticObject extends GameObject {
    ObjectVisual:ObjectOV;
    position:number;
    objectType: ObjectAttribute;
    constructor(name:string, objectVisual:ObjectOV,position:number,objectType:ObjectAttribute)
    {
        super();
        this.name  =name;
        this.position =position;
        this.ObjectVisual = objectVisual;
        this.objectType = objectType;
    }

    Create()
    {
        ObjectUtility.AppearObject( this.name,  this.ObjectVisual);
        $("#"+this.position).addClass(this.name);
        ObjectUtility.AddObjectAttribute(this.position, this.objectType );
    }
}