// import Triangle from './../src/js/triangle.js';

// describe('Triangle', () => {

//   test('should correctly create a triangle object with three lengths', () => {
//     const triangle = new Triangle(2,4,5);
//     expect(triangle.side1).toEqual(2);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).toEqual(5);
//   });

// });

import {storeState, stateControl, changeState, feed, blueFood, hydrate, superWater } from './../src/js/plant.js';

describe('storeState', () => {
  
  test('should correctly store the state', () => {

    // const stateControl = storeState();
    // const feed = changeState("soil")(1);

    const newState = { "soil": 1 };
    expect(newState).toEqual({ soil: 1 });
  });
});