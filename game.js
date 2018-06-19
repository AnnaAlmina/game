const actorDict = {
  '@': Player,
  'o': Coin,
  'v': FireRain,
  '|': VerticalFireball,
  '=': HorizontalFireball
};

const parser = new LevelParser(actorDict);

loadLevels()
    .then(levels => {

  return runGame(JSON.parse(levels), parser, DOMDisplay);

}).then(result => alert('Вы выиграли!'));