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
    const pentagonPField = document.getElementById("pentagon-p");
    const pentagonBField = document.getElementById("pentagon-b");
    const pentagonPString = pentagonPField.value;
    const pentagonBString = pentagonBField.value;
    const pentagonP = parseFloat(pentagonPString);
    const pentagonB = parseFloat(pentagonBString);
    const pentagonArea = 0.5 * pentagonP * pentagonB;
    console.log(pentagonArea);
  }