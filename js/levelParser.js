'use strict';

class LevelParser {
    constructor(actorObject = {}) {
        this.actors = Object.create(actorObject);
        this.obstacles = {
            'x': 'wall',
            '!': 'lava'
        };
    }

    actorFromSymbol(symbol) {
        return this.actors[symbol];
    }

    obstacleFromSymbol(symbol) {
        return this.obstacles[symbol];
    }

    createGrid(plan = []) {
        return plan.map(row => row.split('').map(item => this.obstacleFromSymbol(item)));
    }

    createActors(plan = []) {
        let actors = [];

        plan.forEach((strOfPlan, firstIndex) => {
            strOfPlan.split('').forEach((symbol, index) => {
                let constructor = this.actorFromSymbol(symbol);

                if (typeof constructor === 'function') {
                    let actor = new constructor(new Vector(index, firstIndex));

                    if (actor instanceof Actor) {
                        actors.push(actor);
                    }
                }
            });
        });

        return actors;
    }

    parse(plan) {
        return new Level(this.createGrid(plan), this.createActors(plan));
    }
}