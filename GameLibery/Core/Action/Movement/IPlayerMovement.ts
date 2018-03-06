export interface IPlayerMovement {
    currentPosition:number;
    name:string;
    Up(): void;
    Down(): void;
    Left(): void;
    Right(): void;
}