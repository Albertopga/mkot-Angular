export class Dice {

    public result: number;
    public image: string;

    constructor() {

    }

    rollDice() {
        this.result = Math.floor(Math.random() * 6) + 1;
        this.image = this.imagenDeResultado(this.result);
    }

    private imagenDeResultado(resultado) {
        switch (resultado) {
            case 1:
                return "src\assets\images\dices\dice1.jpg";
            case 2:
                return "src\assets\images\dices\dice2.jpg";
            case 3:
                return "src\assets\images\dices\dice3.jpg";
            case 4:
                return "src\assets\images\dices\diceAttack.jpg";
            case 5:
                return "src\assets\images\dices\diceEnergy.jpg";
            case 6:
                return "src\assets\images\dices\diceHealth.jpg";
            default:
                return "";
        }
    }