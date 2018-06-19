'use strict';

class VerticalFireball extends Fireball {
    constructor(pos = new Vector(0, 0)) {
        super(pos, new Vector(0, 2));
    }
}