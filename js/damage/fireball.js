'use strict';

class Fireball extends Actor {
    constructor(pos = new Vector(0, 0), speed = new Vector(0, 0)) {
        super(pos, new Vector(1, 1), speed);
    }

    get type() {
        return 'fireball';
    }

    getNextPosition(time = 1) {
        return this.pos.plus(this.speed.times(time))
    }

    handleObstacle() {
        this.speed = this.speed.times(-1);
    }

    act(time, level) {
        let pos = this.getNextPosition(time);
        if (level.obstacleAt(pos, this.size)) {
            this.handleObstacle();
        } else {
            this.pos = pos;
        }
    }
}
