export class Monster {

    name: string;
    image: string;
    health: number;
    energy: number;
    victory: number;
    activate: boolean;
    inTokyo: boolean;
    dead: boolean;
    winner: boolean;

    constructor(name: string, image: string) {
        this.name = name;
        this.image = image;
        this.health = 10;
        this.energy = 0;
        this.victory = 0;
        this.activate = false;
        this.inTokyo = false;
        this.dead = false;
        this.winner = false;
    }
}