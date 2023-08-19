// functional method using function from utilities

function calculateTriangleArea() {
  const triangleB = getValueById("triangle-b");
  const triangleH = getValueById("triangle-h");
  const validateCommand = validate(triangleB, triangleH);

  if (validateCommand) {
    return;
  }

  const triangleArea = 0.5 * triangleB * triangleH;
  setToCalculatorArea("Triangle", triangleArea);
}
function calculateRhombusArea() {
  const rhombusD1 = getValueById("rhombus-d1");
  const rhombusD2 = getValueById("rhombus-d2");
  const validateCommand = validate(rhombusD1, rhombusD2);

  if (validateCommand) {
    return;
  }

  const rhombusArea = 0.5 * rhombusD1 * rhombusD2;
  setToCalculatorArea("Rhombus", rhombusArea);
}
function calculatePentagonArea() {
  const pentagonP = getValueById("pentagon-p");
  const pentagonB = getValueById("pentagon-b");
  const validateCommand = validate(pentagonP, pentagonB);

  if (validateCommand) {
    return;
  }

  const pentagonArea = 0.5 * pentagonP * pentagonB;
  setToCalculatorArea("Pentagon", pentagonArea);
}

function calculateRectangleArea() {
  const rectangleW = getValueById("rectangle-w");
  const rectangleL = getValueById("rectangle-l");
  const validateCommand = validate(rectangleW, rectangleL);

  if (validateCommand) {
    return;
  }

  const rectangleArea = rectangleW * rectangleL;
  setToCalculatorArea("Rectangle", rectangleArea);
}
function calculateParallelogramArea() {
  const parallelogramB = getValueById("parallelogram-b");
  const parallelogramH = getValueById("parallelogram-h");
  const validateCommand = validate(parallelogramB, parallelogramH);

  if (validateCommand) {
    return;
  }

  const parallelogramArea = parallelogramB * parallelogramH;
  setToCalculatorArea("Parallelogram", parallelogramArea);
}
function calculateEllipseArea() {
  const ellipseA = getValueById("ellipse-a");
  const ellipseB = getValueById("ellipse-b");
  const validateCommand = validate(ellipseA, ellipseB);

  if (validateCommand) {
    return;
  }

  const ellipseArea = (3.1416 * ellipseA * ellipseB).toFixed(2);
  setToCalculatorArea("Ellipse", ellipseArea);
}
