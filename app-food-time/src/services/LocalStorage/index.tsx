function addItemCar(value: string): void {
  const currentValue = getItemsCar();
  let newValue = value;
  if (!currentValue) {
    newValue = currentValue + value;
  }
  localStorage.setItem("@snackList", newValue);
}

function getItemsCar(): string | null {
  console.log(localStorage.getItem("@snackList"));
  return localStorage.getItem("@snackList");
}

function convertToJson(value: string): string {
  return JSON.stringify(value);
}

function convertFromJson(value: string): Object {
  return JSON.parse(value);
}

export { addItemCar, getItemsCar, convertToJson, convertFromJson };
