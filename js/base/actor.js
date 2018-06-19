'use strict';

class Actor {
    constructor(pos = new Vector(0, 0), size = new Vector(1, 1), speed = new Vector(0, 0)) {
        if (!(pos instanceof Vector) || !(size instanceof Vector) || !(speed instanceof Vector)) {
            throw (new Error('Можно прибавлять только вектор'));
        }

        this.pos = pos;
        this.size = size;
        this.speed = speed;
    }

    get type() {
        return 'actor';
    }

    get left() {
        return this.pos.x;
    }

    get right() {
        return this.pos.x + this.size.x;
    }

    get top() {
        return this.pos.y;
    }

    get bottom() {
        return this.pos.y + this.size.y;
    }

    isIntersect(actor) {
        if (!(actor instanceof Actor)) {
            throw(new Error('Переданный аргумент неверного типа!'));
        }
        if (actor === this) {
            return false;
        }
        if (this.left >= actor.right) {
            return false;
        }
        if (this.right <= actor.left) {
            return false;
        }
        if (this.bottom <= actor.top) {
            return false;
        }
        if (this.top >= actor.bottom) {
            return false;
        }

        return true;
    }

    act() {
    }
}