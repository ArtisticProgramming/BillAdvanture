import {
    KeyValuePair
} from "../Utility/KeyValuePair";
import { ObjectAttribute } from "../Core/General/Enums";

// --------------------------------------------------------------------------------------------------
export class ObjectOV {
    public GetPhotoPath(photo: string): string {
        return "url(image/" + photo + ")";
    }
    public ObjectType: ObjectAttribute=ObjectAttribute.block;
    public backgroundSize: number = 54;
    public backgroundRepeat: string = "no-repeat";
    public backgroundPosition: string = "center";
    public photo = this.GetPhotoPath("tree.png");

    getProperteyList(): Array<KeyValuePair>{
        return new  Array < KeyValuePair >();
    }
}

// --------------------------------------------------------------------------------------------------
export class BillGatesOV extends ObjectOV {
    constructor() {
        super();
        this.photo="billgates2.png";
        this.backgroundSize = 56; 
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}

export class AndresOV extends ObjectOV {
    constructor() {
        super();
        this.photo="anders.png";
        this.backgroundSize = 56; 
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}

export class SatyaNadella extends ObjectOV {
    constructor() {
        super();
        this.photo="SatyaNadella.png";
        
        this.backgroundSize = 50; 
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}


// --------------------------------------------------------------------------------------------------
export class SteveJobsOV extends ObjectOV {
    constructor() {
        super();
        this.photo="2.png";
        this.backgroundSize = 47;
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image",this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}
// --------------------------------------------------------------------------------------------------
export class LinusOV extends ObjectOV {
    constructor() {
        super();
        this.photo="linus.png";

    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}
// --------------------------------------------------------------------------------------------------
export class TimCook extends ObjectOV {
    constructor() {
        super();
        this.photo="timcook.png";
        this.backgroundSize = 54;

    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}

// --------------------------------------------------------------------------------------------------
export class zuckerbergOV extends ObjectOV {
    constructor() {
        super();
        this.photo="zac.png";
        this.backgroundSize = 92;
        this.backgroundPosition="-23px -9px";
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}
// --------------------------------------------------------------------------------------------------
export class sundarPichaiOV extends ObjectOV {
    constructor() {
        super();
        this.photo="sundarpichai.png";
        this.backgroundSize = 50;

    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}


// --------------------------------------------------------------------------------------------------
export class PineTreeOV extends ObjectOV {
    constructor() {
        super();
        this.photo="tree.png";
        this.backgroundSize = 61;
        this.backgroundPosition="bottom"
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}
// --------------------------------------------------------------------------------------------------
export class PalmTreeOV extends ObjectOV {

    constructor() {
        super();
        this.photo="tree3.png"
        this.backgroundSize = 57;
    }

    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}
// --------------------------------------------------------------------------------------------------
export class CoconutPalmTreeOV extends ObjectOV {
    constructor() {
        super();
        this.photo="tree5.png"
        this.backgroundSize = 61;
        this.backgroundPosition="top"
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}
// --------------------------------------------------------------------------------------------------
export class FireOV extends ObjectOV {
    constructor() {
        super();
        this.photo='fire.gif',
        this.ObjectType=ObjectAttribute.kill
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}
// --------------------------------------------------------------------------------------------------
export class HoleOV extends ObjectOV {
    constructor() {
        super();
        this.photo='hole.png'
        this.backgroundSize= 148;
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}
// --------------------------------------------------------------------------------------------------
export class StoneOV extends ObjectOV {
    constructor() {
        super();
        this.photo='stone.png'
        this.backgroundSize= 60;
        
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}
// --------------------------------------------------------------------------------------------------
export class GrassOV extends ObjectOV {
    constructor() {
        super();
        this.photo='grass.png';
        this.backgroundPosition="bottom";
       
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}
// ----------------------------------------------GOAL----------------------------------------------------
export class GoalOV extends ObjectOV {
    constructor() {
        super();
        this.photo='MicrosoftIcons.png';
        this.backgroundPosition="-7px -12px";
        this.ObjectType=ObjectAttribute.Goal;
        this.backgroundSize=480;
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}
// ----------------------------------------------GOAL2----------------------------------------------------
export class Goal2OV extends ObjectOV {
    constructor() {
        super();
        this.photo='MicrosoftIcons.png';
        this.backgroundPosition="-9px -98px";
        this.ObjectType=ObjectAttribute.Goal;
        this.backgroundSize=480;
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}
// ----------------------------------------------GOAL3----------------------------------------------------
export class Goal3OV extends ObjectOV {
    constructor() {
        super();
        this.photo='MicrosoftIcons.png';
        this.backgroundPosition="-8px -175px";
        this.ObjectType=ObjectAttribute.Goal;
        this.backgroundSize=480;
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}
// ----------------------------------------------GOAL4----------------------------------------------------
export class Goal4OV extends ObjectOV {
    constructor() {
        super();
        this.photo='MicrosoftIcons.png';
        this.backgroundPosition="-230px -10px";
        this.ObjectType=ObjectAttribute.Goal;
        this.backgroundSize=480;
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}
// ----------------------------------------------GOAL5----------------------------------------------------
export class Goal5OV extends ObjectOV {//xbox
    constructor() {
        super();
        this.photo='MicrosoftIcons.png';
        this.backgroundPosition="-360px -128px";
        this.ObjectType=ObjectAttribute.Goal;
        this.backgroundSize=563;
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}
// ----------------------------------------------GOAL6----------------------------------------------------
export class Goal6OV extends ObjectOV {//vscode
    constructor() {
        super();
        this.photo='MicrosoftIcons.png';
        this.backgroundPosition="-220px -175px";
        this.ObjectType=ObjectAttribute.Goal;
        this.backgroundSize=480;
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}
// ----------------------------------------------GOAL7----------------------------------------------------
export class Goal7OV extends ObjectOV {//circlewindows
    constructor() {
        super();
        this.photo='MicrosoftIcons.png';
        this.backgroundPosition="-301px -253px";
        this.ObjectType=ObjectAttribute.Goal;
        this.backgroundSize=480;
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}
// ----------------------------------------------GOAL8----------------------------------------------------
export class Goal8OV extends ObjectOV {
    constructor() {
        super();
        this.photo='MicrosoftIcons.png';
        this.backgroundPosition="-153px -96px";
        this.ObjectType=ObjectAttribute.Goal;
        this.backgroundSize=480;
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}
// ----------------------------------------------GOAL9----------------------------------------------------
export class Goal9OV extends ObjectOV {//surface
    constructor() {
        super();
        this.photo='MicrosoftIcons.png';
        this.backgroundPosition="-258px -119px";
        this.ObjectType=ObjectAttribute.Goal;
        this.backgroundSize=527;
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}
// ----------------------------------------------GOAL10----------------------------------------------------
export class Goal10OV extends ObjectOV {//vb
    constructor() {
        super();
        this.photo='MicrosoftIcons.png';
        this.backgroundPosition="-94px -208px";
        this.ObjectType=ObjectAttribute.Goal;
        this.backgroundSize=548;
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}
// ----------------------------------------------GOAL11----------------------------------------------------
export class Goal11OV extends ObjectOV {//vs2010
    constructor() {
        super();
        this.photo='MicrosoftIcons.png';
        this.backgroundPosition="-178px -209px";
        this.ObjectType=ObjectAttribute.Goal;
        this.backgroundSize=542;
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}
// ----------------------------------------------GOAL12----------------------------------------------------
export class Goal12OV extends ObjectOV {//sqlserver
    constructor() {
        super();
        this.photo='MicrosoftIcons.png';
        this.backgroundPosition="-347px -209px";
        this.ObjectType=ObjectAttribute.Goal;
        this.backgroundSize=544;
    }
    getProperteyList(): Array < KeyValuePair > {
        let properteyList: Array < KeyValuePair > = new Array < KeyValuePair > ();
        properteyList.push(new KeyValuePair("background-image", this.GetPhotoPath(this.photo)));
        properteyList.push(new KeyValuePair("background-repeat", this.backgroundRepeat));
        properteyList.push(new KeyValuePair("background-position", this.backgroundPosition));
        properteyList.push(new KeyValuePair("background-size", this.backgroundSize + "px"));
        return properteyList
    }
}