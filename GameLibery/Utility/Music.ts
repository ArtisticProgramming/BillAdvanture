export class Music {

   static MusicFile: any=document.getElementById("audio");

    static playAudio() { 
        this.MusicFile.play(); 
    } 

    static pauseAudio() { 
        this.MusicFile.pause(); 
    }

}