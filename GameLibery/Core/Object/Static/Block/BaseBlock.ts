import { GameObject } from "../../GameObject";
import { ObjectUtility } from "../../ObjectUtility";
import { ObjectOV } from "../../../../Configuration/ObjectVisual";

export class BaseBlock extends GameObject {
    ObjectVisual:ObjectOV;
    position:number;
    constructor(name:string, objectVisual:ObjectOV,position:number)
    {
        super();
        this.name  =name;
        this.position =position;
        this.ObjectVisual = objectVisual;
    }

    Create()
    {
        ObjectUtility.AppearObject( this.name,  this.ObjectVisual);
        $("#"+this.position).addClass(this.name);
        $("#"+this.position).addClass("close");
    }
}