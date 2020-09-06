export class Monster {

    name: string;
    image: string;
    health: number;
    energy: number;
    victory: number;

    constructor(name: string, image: string) {
        this.name = name;
        this.image = image;
        this.health = 10;
        this.energy = 0;
        this.victory = 0;
    }
}