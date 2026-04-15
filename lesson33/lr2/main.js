function identifyMonster(weaknesses, bestiary) {
  for (const monster in bestiary) {
    const monsterWeaknesses = bestiary[monster];
    const isMatch = weaknesses.every((weakness) =>
      monsterWeaknesses.includes(weakness),
    );
    if (isMatch) {
      return monster;
    }
  }
  return "Unknown monster";
}

const bestiary = {
  Griffin: ["Grapeshot", "Hybrid Oil", "Aard"],
  Noonwraith: ["Yrden", "Moon Dust", "Specter Oil"],
  Drowner: ["Igni", "Necrophage Oil"],
};

console.log(identifyMonster(["Igni", "Necrophage Oil"], bestiary));

console.log(identifyMonster(["Yrden", "Moon Dust"], bestiary));

console.log(identifyMonster(["Silver", "Garlic"], bestiary));
