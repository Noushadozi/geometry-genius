function getValueById(ID) {
  const Field = document.getElementById(ID);
  const valueString = Field.value;
  const value = parseFloat(valueString);
  return value;
}
function validate(a, b) {
  if (isNaN(a) || isNaN(b)) {
    alert("please insert a number");
    return;
  }
}
