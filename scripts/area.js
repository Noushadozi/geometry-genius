// normal easy method

function calculateTriangleArea() {
  const triangleBField = document.getElementById("triangle-b");
  const triangleHField = document.getElementById("triangle-h");
  const triangleBString = triangleBField.value;
  const triangleHString = triangleHField.value;
  const triangleB = parseFloat(triangleBString);
  const triangleH = parseFloat(triangleHString);

  if (isNaN(triangleB) || isNaN(triangleH)) {
    alert("please insert a number");
    return;
  }
  const triangleArea = 0.5 * triangleB * triangleH;

  const calculationEntry = document.getElementById("calculation-entry");
  const p = document.createElement("p");

  p.innerHTML = `
  Triangle ${triangleArea} cm<sup>2</sup>
    <button class="my-4 btn btn-sm btn-success">Convert</button>
  `;
  calculationEntry.appendChild(p);
}
function calculateRectangleArea() {
  const rectangleWField = document.getElementById("rectangle-w");
  const rectangleLField = document.getElementById("rectangle-l");
  const rectangleWString = rectangleWField.value;
  const rectangleLString = rectangleLField.value;
  const rectangleW = parseFloat(rectangleWString);
  const rectangleL = parseFloat(rectangleLString);

  if (isNaN(rectangleW) || isNaN(rectangleL)) {
    alert("please insert a number");
    return;
  }

  const rectangleArea = rectangleW * rectangleL;
  const calculationEntry = document.getElementById("calculation-entry");
  const p = document.createElement("p");

  p.innerHTML = `
  Rectangle ${rectangleArea} cm<sup>2</sup>
    <button class="my-4 btn btn-sm btn-success">Convert</button>
  `;
  calculationEntry.appendChild(p);
}
function calculateParallelogramArea() {
  const parallelogramBField = document.getElementById("parallelogram-b");
  const parallelogramHField = document.getElementById("parallelogram-h");
  const parallelogramBString = parallelogramBField.value;
  const parallelogramHString = parallelogramHField.value;
  const parallelogramB = parseFloat(parallelogramBString);
  const parallelogramH = parseFloat(parallelogramHString);

  if (isNaN(parallelogramB) || isNaN(parallelogramH)) {
    alert("please insert a number");
    return;
  }

  const parallelogramArea = parallelogramB * parallelogramH;
  const calculationEntry = document.getElementById("calculation-entry");
  const p = document.createElement("p");

  p.innerHTML = `
  Parallelogram ${parallelogramArea} cm<sup>2</sup>
    <button class="my-4 btn btn-sm btn-success">Convert</button>
  `;
  calculationEntry.appendChild(p);
}

function calculateRhombusArea() {
  const rhombusD1Field = document.getElementById("rhombus-d1");
  const rhombusD2Field = document.getElementById("rhombus-d2");
  const rhombusD1String = rhombusD1Field.value;
  const rhombusD2String = rhombusD2Field.value;
  const rhombusD1 = parseFloat(rhombusD1String);
  const rhombusD2 = parseFloat(rhombusD2String);

  if (isNaN(rhombusD1) || isNaN(rhombusD2)) {
    alert("please insert a number");
    return;
  }

  const rhombusArea = 0.5 * rhombusD1 * rhombusD2;
  const calculationEntry = document.getElementById("calculation-entry");
  const p = document.createElement("p");

  p.innerHTML = `
  Rhombus ${rhombusArea} cm<sup>2</sup>
    <button class="my-4 btn btn-sm btn-success">Convert</button>
  `;
  calculationEntry.appendChild(p);
}
function calculatePentagonArea() {
  const pentagonPField = document.getElementById("pentagon-p");
  const pentagonBField = document.getElementById("pentagon-b");
  const pentagonPString = pentagonPField.value;
  const pentagonBString = pentagonBField.value;
  const pentagonP = parseFloat(pentagonPString);
  const pentagonB = parseFloat(pentagonBString);

  if (isNaN(pentagonP) || isNaN(pentagonB)) {
    alert("please insert a number");
    return;
  }

  const pentagonArea = 0.5 * pentagonP * pentagonB;
  const calculationEntry = document.getElementById("calculation-entry");
  const p = document.createElement("p");

  p.innerHTML = `
  Pentagon ${pentagonArea} cm<sup>2</sup>
    <button class="my-4 btn btn-sm btn-success">Convert</button>
  `;
  calculationEntry.appendChild(p);
}
function calculateEllipseArea() {
  const ellipseAField = document.getElementById("ellipse-a");
  const ellipseBField = document.getElementById("ellipse-b");
  const ellipseAString = ellipseAField.value;
  const ellipseBString = ellipseBField.value;
  const ellipseA = parseFloat(ellipseAString);
  const ellipseB = parseFloat(ellipseBString);

  if (isNaN(ellipseA) || isNaN(ellipseB)) {
    alert("please insert a number");
    return;
  }

  const ellipseArea = (3.1416 * ellipseA * ellipseB).toFixed(2);
  const calculationEntry = document.getElementById("calculation-entry");
  const p = document.createElement("p");

  p.innerHTML = `
  Ellipse ${ellipseArea} cm<sup>2</sup>
    <button class="my-4 btn btn-sm btn-success">Convert</button>
  `;
  calculationEntry.appendChild(p);
}
