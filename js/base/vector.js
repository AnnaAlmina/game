'use strict';

class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        if (!(vector instanceof Vector)) {
            throw new Error('Можно прибавлять к вектору только вектор класса Vector!');
        }

        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    times(time = 1) {
        return new Vector(this.x * time, this.y * time);
    }
}
