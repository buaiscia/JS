//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
//Black - Brown - Red - Orange - Yellow - Green - Blue - Violet - Grey - White

export const decodedValue = (color) => {

  let arrColor = [...color];

  var colors = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  }

  let [first, second] = [colors[arrColor[0]].toString(), colors[arrColor[1].toString()]];

  return Number(first + second);
  

};


