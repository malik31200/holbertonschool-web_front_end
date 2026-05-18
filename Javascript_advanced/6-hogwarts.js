class studentHogwarts {
    constructor() {
    this.privateScore = 0;
    this.name = null;
    }

    #changeScoreBy(points) {
        this.privateScore += points;
    }

    setName(newName) {
        this.name = newName;
        return this;
    }

    rewardStudent() {
        this.#changeScoreBy(1);
        return this;
    }

    penalizeStudent() {
        this.#changeScoreBy(-1);
        return this;
    }

    getScore() {
        return `${this.name}: ${this.privateScore}`;
    }
}

const harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

const drago = new studentHogwarts();
drago.setName("Drago");
drago.rewardStudent();
drago.penalizeStudent();
drago.penalizeStudent();
drago.penalizeStudent();
console.log(drago.getScore());
