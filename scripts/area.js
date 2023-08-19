function calculateTriangleArea() {
  const triangleBField = document.getElementById("triangle-b");
  const triangleHField = document.getElementById("triangle-h");
  const triangleBString = triangleBField.value;
  const triangleHString = triangleHField.value;
  const triangleB = parseFloat(triangleBString);
  const triangleH = parseFloat(triangleHString);
  const triangleArea = 0.5 * triangleB * triangleH;
  console.log(triangleArea);
}
function calculateRectangleArea() {
    const rectangleWField = document.getElementById("rectangle-w");
    const rectangleLField = document.getElementById("rectangle-l");
    const rectangleWString = rectangleWField.value;
    const rectangleLString = rectangleLField.value;
    const rectangleW = parseFloat(rectangleWString);
    const rectangleL = parseFloat(rectangleLString);
    const rectangleArea = rectangleW * rectangleL;
    console.log(rectangleArea);
}
function calculateParallelogramArea() {
    const parallelogramBField = document.getElementById("parallelogram-b");
    const parallelogramHField = document.getElementById("parallelogram-h");
    const parallelogramBString = parallelogramBField.value;
    const parallelogramHString = parallelogramHField.value;
    const parallelogramB = parseFloat(parallelogramBString);
    const parallelogramH = parseFloat(parallelogramHString);
    const parallelogramArea = parallelogramB * parallelogramH;
    console.log(parallelogramArea);
}

function calculateRhombusArea() {
  const rhombusD1Field = document.getElementById("rhombus-d1");
  const rhombusD2Field = document.getElementById("rhombus-d2");
  const rhombusD1String = rhombusD1Field.value;
  const rhombusD2String = rhombusD2Field.value;
  const rhombusD1 = parseFloat(rhombusD1String);
  const rhombusD2 = parseFloat(rhombusD2String);
  const rhombusArea = 0.5 * rhombusD1 * rhombusD2;
  console.log(rhombusArea);
}
function calculatePentagonArea() {
  const pentagonPField = document.getElementById("pentagon-p");
  const pentagonBField = document.getElementById("pentagon-b");
  const pentagonPString = pentagonPField.value;
  const pentagonBString = pentagonBField.value;
  const pentagonP = parseFloat(pentagonPString);
  const pentagonB = parseFloat(pentagonBString);
  const pentagonArea = 0.5 * pentagonP * pentagonB;
  console.log(pentagonArea);
}
function calculateEllipseArea() {
  const ellipseAField = document.getElementById("ellipse-a");
  const ellipseBField = document.getElementById("ellipse-b");
  const ellipseAString = ellipseAField.value;
  const ellipseBString = ellipseBField.value;
  const ellipseA = parseFloat(ellipseAString);
  const ellipseB = parseFloat(ellipseBString);
  const ellipseArea = 3.1416 * ellipseA * ellipseB;
  console.log((ellipseArea).toFixed(2));
}