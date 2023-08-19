function getValueById(ID) {
  const Field = document.getElementById(ID);
  const valueString = Field.value;
  const value = parseFloat(valueString);
  return value;
}
function validate(a, b) {
  if (isNaN(a) || isNaN(b)) {
    alert("please insert a number");
    return true;
  }
}

function setToCalculatorArea(areaName, area) {
  const calculationEntry = document.getElementById("calculation-entry");
  const p = document.createElement("p");

  p.innerHTML = `
  ${areaName} ${area} cm<sup>2</sup>
    <button class="my-4 btn btn-sm btn-success">Convert</button>
  `;
  calculationEntry.appendChild(p);
}
