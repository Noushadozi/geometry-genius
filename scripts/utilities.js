function getValueById(ID) {
  const Field = document.getElementById(ID);
  const valueString = Field.value;
  const value = parseFloat(valueString);
  return value;
}
