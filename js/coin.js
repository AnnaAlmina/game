'use strict';

class Coin extends Actor {
    constructor(position = new Vector(0, 0)) {
        let posStart = position.plus(new Vector(0.2, 0.1));

        super(posStart, new Vector(0.6, 0.6));

        this.position = posStart;

        this.spring = Math.random() * 2 * Math.PI;
        this.springSpeed = 8;
        this.springDist = 0.07;
    }

    get type() {
        return 'coin';
    }

    act(time) {
        this.pos = this.getNextPosition(time)
    }

    getNextPosition(time = 1) {
        this.updateSpring(time);

        return this.position.plus(this.getSpringVector());
    }

    updateSpring(time = 1) {
        this.spring += this.springSpeed * time;
    }

    getSpringVector() {
        return new Vector(0, Math.sin(this.spring) * this.springDist);
    }
}