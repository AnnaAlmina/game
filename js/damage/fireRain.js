'use strict';

class FireRain extends Fireball {
    constructor(pos = new Vector(0, 0)) {
        super(pos, new Vector(0, 3));
        
        this.oldPos = this.pos;
    }

    handleObstacle() {
        this.pos = this.oldPos;
    }
}
