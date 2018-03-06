import {
    KeyValuePair
} from "../Utility/KeyValuePair";

// --------------------------------------------------------------------------------------------------
export class ObjectOV {
    public GetPhotoPath(photo: string): string {
        return "url(image/" + photo + ")";
    }
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
        this.backgroundSize = 47;
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
        this.photo='fire.gif'
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