export const cakes = (recipe, available) => {
  let cakes = [];
  let totCakes = 0;
  if (Object.keys(available).length === 0) {
    return 0;
  }
  for (ingredient in recipe) {

    for (avail in available) {

      if (!available.hasOwnProperty(ingredient)) {
        return 0;
      }
      if (ingredient == avail) {
        cakes.push(available[avail] / recipe[ingredient])
      }
    }

  }
  console.log(cakes);
  totCakes = Math.floor(Math.min(...cakes));
  return totCakes;
}