export interface IPlayerMovement {
    currentPosition:number;
    name:string;
    Up(): boolean;
    Down(): boolean;
    Left(): boolean;
    Right(): boolean;
}