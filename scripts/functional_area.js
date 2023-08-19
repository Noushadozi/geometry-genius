function calculateTriangleArea() {
  const triangleB = getValueById("triangle-b");
  const triangleH = getValueById("triangle-h");
  const triangleArea = 0.5 * triangleB * triangleH;
  console.log(triangleArea);
}
function calculateRhombusArea() {
  const rhombusD1 = getValueById("rhombus-d1");
  const rhombusD2 = getValueById("rhombus-d2");
  const rhombusArea = 0.5 * rhombusD1 * rhombusD2;
  console.log(rhombusArea);
}
function calculatePentagonArea() {
  const pentagonP = getValueById("pentagon-p");
  const pentagonB = getValueById("pentagon-b");
  const pentagonArea = 0.5 * pentagonP * pentagonB;
  console.log(pentagonArea);
}

function calculateRectangleArea() {
  const rectangleW = getValueById("rectangle-w");
  const rectangleL = getValueById("rectangle-l");
  const rectangleArea = rectangleW * rectangleL;
  console.log(rectangleArea);
}
function calculateParallelogramArea() {
  const parallelogramB = getValueById("parallelogram-b");
  const parallelogramH = getValueById("parallelogram-h");
  const parallelogramArea = parallelogramB * parallelogramH;
  console.log(parallelogramArea);
}
function calculateEllipseArea() {
    const ellipseA = getValueById("ellipse-a");
    const ellipseB = getValueById("ellipse-b");
    const ellipseArea = 3.1416 * ellipseA * ellipseB;
    console.log((ellipseArea).toFixed(2));
  }