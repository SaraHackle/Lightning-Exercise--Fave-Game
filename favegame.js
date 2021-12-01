

let makeFaveGameString = faveGame => {
  return `My favorite game is ${faveGame}`;
};

console.log(makeFaveGameString("borderlands"));

makeFaveGameString = (faveGame) => `My favorite game is ${faveGame}`;

console.log(makeFaveGameString("monopoly"));

makeFaveGameString = (faveGame) => {
  faveGameString = `My favorite game is ${faveGame}`;
  return faveGameString;
};

console.log(makeFaveGameString("Dark Souls"));

makeFaveGameString = faveGame => `My favorite game is ${faveGame}`;

console.log(makeFaveGameString("CandyLand"));
