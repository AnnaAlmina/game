'use strict';

class Level {
    constructor(grid = [], actors = []) {
        this.status = null;
        this.finishDelay = 1;

        this.actors = actors.slice();
        this.grid = grid.slice();

        this.height = grid.length;
        this.width = Math.max(0, ...grid.map(item => item.length));

        this.player = this.actors.find(actor => actor.type === 'player');
    }

    actorAt(actor) {
        if (!(actor instanceof Actor)) {
            throw(new Error('Передан не верный класс Actor!'));
        }

        return this.actors.find(actorSelf => actor.isIntersect(actorSelf));
    }

    obstacleAt(position, size) {
        if (!(position instanceof Vector) || !(size instanceof Vector)) {
            throw(new Error('Передана неверный класс Vector'));
        }

        let left = Math.floor(position.x);
        let right = Math.ceil(position.x + size.x);
        let top = Math.floor(position.y);
        let bottom = Math.ceil(position.y + size.y);

        if (left < 0 || right > this.width || top < 0) {
            return 'wall';
        }
        if (bottom > this.height) {
            return 'lava';
        }

        for (let horizontal = left; horizontal < right; horizontal++) {
            for (let vertical = top; vertical < bottom; vertical++) {
                let cell = this.grid[vertical][horizontal];
                if (cell) {
                    return cell;
                }
            }
        }
    }

    isFinished() {
        return this.status !== null && this.finishDelay < 0;
    }

    playerTouched(type, actor) {
        if (this.status !== null) {
            return;
        }
        if (type === 'lava' || type === 'fireball') {
            this.status = 'lost';
            return;
        }
        if (type === 'coin') {
            this.removeActor(actor);

            if (this.noMoreActors('coin')) {
                this.status = 'won';
            }
        }
    }

    removeActor(actor) {
        this.actors = this.actors.filter(item => item !== actor);
    }

    noMoreActors(type) {
        return !this.actors.some(actor => actor.type === type);
    }
}