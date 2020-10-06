let createDiv = (className: string) => {
  let element = document.createElement("div");
  element.className = className;
  return element;
};

let createInput = (id: string) => {
  let td = document.createElement("td");
  let element = document.createElement("input");
  element.type = "text";
  element.setAttribute("value", "");
  element.id = id;
  td.append(element);
  return td;
};

let createButton = (id: string) => {
  let td = document.createElement("td");
  let button = document.createElement("button");
  button.className = "btn";
  button.innerHTML = "Evaluate";
  td.colSpan = 2;
  button.value = id;
  button.id = id;
  td.append(button);
  return td;
};

let createH3 = (text: string) => {
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  td.colSpan = 2;
  let element = document.createElement("h3");
  element.innerHTML = text;
  td.append(element);
  tr.append(td);
  return tr;
};

let createSpan = (text: string) => {
  let td = document.createElement("td");
  let element = document.createElement("span");
  element.innerHTML = text;
  td.append(element);
  return td;
};

let createTr = () => {
  let element = document.createElement("tr");
  return element;
};

let createRow1 = () => {
  let tr = createTr();
  tr.className = "box";
  let info = createH3("Chunk Function");
  let tr1 = createTr();
  let tr2 = createTr();
  let tr3 = createTr();
  let span1 = createSpan("Space separated array elements : ");
  let input1 = createInput("array1");
  tr1.append(span1, input1);
  let span2 = createSpan("Chunk size : ");
  let input2 = createInput("chunks");
  tr2.append(span2, input2);
  let button = createButton("chunkOperation");
  tr3.append(button);
  tr.append(info, tr1, tr2, tr3);
  return tr;
};

let createRow2 = () => {
  let tr = createTr();
  tr.className = "box";
  let tr1 = createTr();
  let tr2 = createTr();
  let tr3 = createTr();
  let h3 = createH3("Reduce Function");
  let span1 = createSpan("Space separated array elements (only Numbers) : ");
  let input1 = createInput("array2");
  tr1.append(span1, input1);
  let span2 = createSpan("Operations (+, -, *) : ");
  let input2 = createInput("operation1");
  tr2.append(span2, input2);
  let span3 = createSpan("Initial value : ");
  let input3 = createInput("initialValue");
  tr3.append(span3, input3);
  let tr4 = createTr();
  let button = createButton("reduceOperation");
  tr4.append(button);
  tr.append(h3, tr1, tr2, tr3, tr4);
  return tr;
};

let createRow3 = () => {
  let tr = createTr();
  tr.className = "box";
  let h3 = createH3("Filter Function");
  let tr1 = createTr();
  let tr2 = createTr();
  let tr3 = createTr();
  let tr4 = createTr();
  let span1 = createSpan("Space separated array elements (only Numbers) : ");
  let input1 = createInput("array3");
  tr1.append(span1, input1);
  let span2 = createSpan("Operations (>, >=, <, <=, ===, !=, ==) : ");
  let input2 = createInput("operation2");
  tr2.append(span2, input2);
  let span3 = createSpan("Value to compare with : ");
  let input3 = createInput("filterValue");
  tr3.append(span3, input3);
  let button = createButton("filterOperation");
  tr4.append(button);
  tr.append(h3, tr1, tr2, tr3, tr4);
  return tr;
};

let createRow4 = () => {
  let tr = createTr();
  tr.className = "box";
  let h3 = createH3("Find Function");
  let tr1 = createTr();
  let tr2 = createTr();
  let tr3 = createTr();
  let span1 = createSpan("Space separated array elements : ");
  let input1 = createInput("array4");
  tr1.append(span1, input1);
  let span2 = createSpan("Element to find : ");
  let input2 = createInput("findValue");
  tr2.append(span2, input2);
  let button = createButton("findOperation");
  tr3.append(button);
  tr.append(h3, tr1, tr2, tr3);
  return tr;
};

let createRow5 = () => {
  let tr = createTr();
  tr.className = "box";
  let tr1 = createTr();
  let tr2 = createTr();
  let h3 = createH3("Sum Function");
  let span1 = "Space separated array elements (only Numbers) : ";
  let input1 = createInput("array5");
  tr1.append(span1, input1);
  let button = createButton("sumOperation");
  tr2.append(button);
  tr.append(h3, tr1, tr2);
  return tr;
};

let createResultRow = () => {
  let div = createDiv("row");
  div.id = "displayData";
  let h2 = document.createElement("h2");
  h2.innerHTML = "Result : ";
  div.appendChild(h2);
  return div;
};

let container = createDiv("container");
let table1 = document.createElement("table");
let table2 = document.createElement("table");

let row1 = createRow1();
let row2 = createRow2();
let row3 = createRow3();
let row4 = createRow4();
let row5 = createRow5();

let row = createDiv("row");
let col1 = createDiv("col-6");
let col2 = createDiv("col-6");

let resultRow = createResultRow();

table1.append(row1, row2);
table2.append(row3, row4, row5);
col1.append(table1);
col2.append(table2);
row.append(col1, col2);

container.append(row, resultRow);
document.body.append(container);

let display = (result: any) => {
  let displayRow = document.querySelector("#displayData");
  displayRow.innerHTML = "";
  console.log(result);
  let h2 = document.createElement("h2");
  h2.innerHTML = `Result : ` + result;
  displayRow.appendChild(h2);
};

let displayChunk = (result: any) => {
  let storeResult = "[";
  for (let i = 0; i < result.length; i++) {
    storeResult += "[";
    for (let j = 0; j < result[i].length; j++) {
      if (j === result[i].length - 1) {
        storeResult += result[i][j];
      } else {
        storeResult += result[i][j] + ", ";
      }
    }
    if (i === result.length - 1) {
      storeResult += "]";
    } else {
      storeResult += "], ";
    }
  }
  storeResult += "]";
  let displayRow = document.querySelector("#displayData");
  displayRow.innerHTML = "";
  let h2 = document.createElement("h2");
  h2.innerHTML = `Result : ${storeResult}`;
  displayRow.appendChild(h2);
};

let chunkOperation = () => {
  let data = (document.querySelector(
    "#array1"
  ) as HTMLInputElement).value.split(" ");
  let chunkSize = (document.querySelector("#chunks") as HTMLInputElement).value;
  let resultArray = [];
  let tempArray = [];
  for (let i = 0; i < data.length; i++) {
    tempArray.push(data[i]);
    if (tempArray.length === parseInt(chunkSize)) {
      resultArray.push(tempArray);
      tempArray = [];
    }
  }
  if (tempArray.length !== 0) {
    resultArray.push(tempArray);
  }
  displayChunk(resultArray);
};

let reduceOperation = () => {
  let data = (document.querySelector("#array2") as HTMLInputElement).value
    .split(" ")
    .map(Number);
  let initialValue = (document.querySelector(
    "#initialValue"
  ) as HTMLInputElement).value;
  let operation = (document.querySelector("#operation1") as HTMLInputElement)
    .value;

  let result = initialValue ? parseInt(initialValue) : 0;
  let availableOperations = {
    "+": (a: number, b: number) => a + b,
    "-": (a: number, b: number) => a - b,
    "*": (a: number, b: number) => a * b,
    "/": (a: number, b: number) => a / b,
  };
  for (let i = 0; i < data.length; i++) {
    result = availableOperations[operation](result, data[i]);
  }
  display(result);
};

let filterOperation = () => {
  let data = (document.querySelector("#array3") as HTMLInputElement).value
    .split(" ")
    .map(Number);
  let operator = (document.querySelector("#operation2") as HTMLInputElement)
    .value;
  let compareValue = parseInt(
    (document.querySelector("#filterValue") as HTMLInputElement).value
  );
  let resultArray = [];
  let availableOperations = {
    ">": (a: number, b: number) => a > b,
    ">=": (a: number, b: number) => a >= b,
    "<": (a: number, b: number) => a < b,
    "<=": (a: number, b: number) => a <= b,
    "===": (a: number, b: number) => a === b,
    "==": (a: number, b: number) => a == b,
    "!=": (a: number, b: number) => a != b,
    "!==": (a: number, b: number) => a !== b,
  };
  for (let i = 0; i < data.length; i++) {
    if (availableOperations[operator](data[i], compareValue)) {
      resultArray.push(data[i]);
    }
  }
  display(resultArray);
};

let findOperation = () => {
  let data = (document.querySelector(
    "#array4"
  ) as HTMLInputElement).value.split(" ");
  let element = (document.querySelector("#findValue") as HTMLInputElement)
    .value;
  let result = -1;
  for (let i = 0; i < data.length; i++) {
    if (data[i] == element) {
      result = i + 1;
      break;
    }
  }
  display(result);
};

let sumOperation = () => {
  let data = (document.querySelector("#array5") as HTMLInputElement).value
    .split(" ")
    .map(Number);
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    result += data[i];
  }
  display(result);
};

document.querySelector(".container").addEventListener("click", (event) => {
  let operation = (event.target as HTMLButtonElement).value;
  if (!operation) {
    return;
  }
  if (operation === "chunkOperation") {
    chunkOperation();
  }
  if (operation === "reduceOperation") {
    reduceOperation();
  }
  if (operation === "filterOperation") {
    filterOperation();
  }
  if (operation === "sumOperation") {
    sumOperation();
  }
  if (operation === "findOperation") {
    findOperation();
  }
});
