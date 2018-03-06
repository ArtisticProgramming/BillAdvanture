export class Camera {
    private static _instance: Camera = new Camera();
    // singlton pattern
    constructor() {
        if (Camera._instance) {
            throw new Error("Error: Instantiation failed: Use GamePlan.getInstance() instead of new.");
        }
        Camera._instance = this;
    }

    public static getInstance(): Camera {
        return Camera._instance;
    }

     sleep(milliseconds:number) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
    }

    MoverCamera(Arrow: string, IsIncrese: boolean, speed: number): void {
         debugger;
        // tslint:disable-next-line:typedef
      

        var val = $("#GamePalne").css(Arrow);
        // tslint:disable-next-line:radix
        let newVal: number = 0;
        if (IsIncrese) {
              newVal = parseInt(val) + speed;
        } else {
                newVal = parseInt(val) - speed;
        }
        $("#GamePalne").css(Arrow, newVal);

       
        // if(Arrow=="left")
        //   $("#GamePalne").animate({ left : newVal+"px" },1000);
        // else
        //   $("#GamePalne").animate({ bottom : newVal+"px" },1000);

      //   this.sleep(1000)
        
    }
}