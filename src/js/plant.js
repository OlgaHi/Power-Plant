// Function to store the state

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => { // take original state and return it
    const newState = stateChangeFunction(currentState);
    currentState = {
      ...newState
    };
    return newState;
  };
};

const stateControl = storeState();
const stateControl2 = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

// We create four functions using our function factory. We could easily create many more.

const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);
const grow = changeState("grow")(5);

$(document).ready(function () {
  $('#superfeed').click(function () {
    const newState = stateControl(blueFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#feed').click(function () {
    const newState = stateControl(feed);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#show-state').click(function () {
    const currentState = stateControl();
    $('#soil-value').text(`The current Soil: ${currentState.soil}`);
    $('#water-value').text(`The current Water: ${currentState.water}`);
  });

  $('#hydrate').click(function () {
    const newState = stateControl(hydrate);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('#extrahydrate').click(function () {
    const newState = stateControl(superWater);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  // New Plant
  $('#superfeed-2').click(function () {
    const newState = stateControl2(blueFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#feed-2').click(function () {
    const newState = stateControl2(feed);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#show-state-2').click(function () {
    const currentState = stateControl2();
    $('#soil-value').text(`The current Soil: ${currentState.soil}`);
    $('#water-value').text(`The current Water: ${currentState.water}`);
    $('#grow-value').text(`The current Grow: ${currentState.grow}`);
  });

  $('#hydrate-2').click(function () {
    const newState = stateControl2(hydrate);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('#extrahydrate-2').click(function () {
    const newState = stateControl2(superWater);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('#grow').click(function () {
    const plant2 = stateControl2(grow);
    $('#grow-value').text(`Grow: ${plant2.grow}`);
  });
});