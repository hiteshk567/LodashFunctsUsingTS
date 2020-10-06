var createDiv = function (className) {
    var element = document.createElement("div");
    element.className = className;
    return element;
};
var createInput = function (id) {
    var td = document.createElement("td");
    var element = document.createElement("input");
    element.type = "text";
    element.setAttribute("value", "");
    element.id = id;
    td.append(element);
    return td;
};
var createButton = function (id) {
    var td = document.createElement("td");
    var button = document.createElement("button");
    button.className = "btn";
    button.innerHTML = "Evaluate";
    td.colSpan = 2;
    button.value = id;
    button.id = id;
    td.append(button);
    return td;
};
var createH3 = function (text) {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.colSpan = 2;
    var element = document.createElement("h3");
    element.innerHTML = text;
    td.append(element);
    tr.append(td);
    return tr;
};
var createSpan = function (text) {
    var td = document.createElement("td");
    var element = document.createElement("span");
    element.innerHTML = text;
    td.append(element);
    return td;
};
var createTr = function () {
    var element = document.createElement("tr");
    return element;
};
var createRow1 = function () {
    var tr = createTr();
    tr.className = "box";
    var info = createH3("Chunk Function");
    var tr1 = createTr();
    var tr2 = createTr();
    var tr3 = createTr();
    var span1 = createSpan("Space separated array elements : ");
    var input1 = createInput("array1");
    tr1.append(span1, input1);
    var span2 = createSpan("Chunk size : ");
    var input2 = createInput("chunks");
    tr2.append(span2, input2);
    var button = createButton("chunkOperation");
    tr3.append(button);
    tr.append(info, tr1, tr2, tr3);
    return tr;
};
var createRow2 = function () {
    var tr = createTr();
    tr.className = "box";
    var tr1 = createTr();
    var tr2 = createTr();
    var tr3 = createTr();
    var h3 = createH3("Reduce Function");
    var span1 = createSpan("Space separated array elements (only Numbers) : ");
    var input1 = createInput("array2");
    tr1.append(span1, input1);
    var span2 = createSpan("Operations (+, -, *) : ");
    var input2 = createInput("operation1");
    tr2.append(span2, input2);
    var span3 = createSpan("Initial value : ");
    var input3 = createInput("initialValue");
    tr3.append(span3, input3);
    var tr4 = createTr();
    var button = createButton("reduceOperation");
    tr4.append(button);
    tr.append(h3, tr1, tr2, tr3, tr4);
    return tr;
};
var createRow3 = function () {
    var tr = createTr();
    tr.className = "box";
    var h3 = createH3("Filter Function");
    var tr1 = createTr();
    var tr2 = createTr();
    var tr3 = createTr();
    var tr4 = createTr();
    var span1 = createSpan("Space separated array elements (only Numbers) : ");
    var input1 = createInput("array3");
    tr1.append(span1, input1);
    var span2 = createSpan("Operations (>, >=, <, <=, ===, !=, ==) : ");
    var input2 = createInput("operation2");
    tr2.append(span2, input2);
    var span3 = createSpan("Value to compare with : ");
    var input3 = createInput("filterValue");
    tr3.append(span3, input3);
    var button = createButton("filterOperation");
    tr4.append(button);
    tr.append(h3, tr1, tr2, tr3, tr4);
    return tr;
};
var createRow4 = function () {
    var tr = createTr();
    tr.className = "box";
    var h3 = createH3("Find Function");
    var tr1 = createTr();
    var tr2 = createTr();
    var tr3 = createTr();
    var span1 = createSpan("Space separated array elements : ");
    var input1 = createInput("array4");
    tr1.append(span1, input1);
    var span2 = createSpan("Element to find : ");
    var input2 = createInput("findValue");
    tr2.append(span2, input2);
    var button = createButton("findOperation");
    tr3.append(button);
    tr.append(h3, tr1, tr2, tr3);
    return tr;
};
var createRow5 = function () {
    var tr = createTr();
    tr.className = "box";
    var tr1 = createTr();
    var tr2 = createTr();
    var h3 = createH3("Sum Function");
    var span1 = "Space separated array elements (only Numbers) : ";
    var input1 = createInput("array5");
    tr1.append(span1, input1);
    var button = createButton("sumOperation");
    tr2.append(button);
    tr.append(h3, tr1, tr2);
    return tr;
};
var createResultRow = function () {
    var div = createDiv("row");
    div.id = "displayData";
    var h2 = document.createElement("h2");
    h2.innerHTML = "Result : ";
    div.appendChild(h2);
    return div;
};
var container = createDiv("container");
var table1 = document.createElement("table");
var table2 = document.createElement("table");
var row1 = createRow1();
var row2 = createRow2();
var row3 = createRow3();
var row4 = createRow4();
var row5 = createRow5();
var row = createDiv("row");
var col1 = createDiv("col-6");
var col2 = createDiv("col-6");
var resultRow = createResultRow();
table1.append(row1, row2);
table2.append(row3, row4, row5);
col1.append(table1);
col2.append(table2);
row.append(col1, col2);
container.append(row, resultRow);
document.body.append(container);
var display = function (result) {
    var displayRow = document.querySelector("#displayData");
    displayRow.innerHTML = "";
    console.log(result);
    var h2 = document.createElement("h2");
    h2.innerHTML = "Result : " + result;
    displayRow.appendChild(h2);
};
var displayChunk = function (result) {
    var storeResult = "[";
    for (var i = 0; i < result.length; i++) {
        storeResult += "[";
        for (var j = 0; j < result[i].length; j++) {
            if (j === result[i].length - 1) {
                storeResult += result[i][j];
            }
            else {
                storeResult += result[i][j] + ", ";
            }
        }
        if (i === result.length - 1) {
            storeResult += "]";
        }
        else {
            storeResult += "], ";
        }
    }
    storeResult += "]";
    var displayRow = document.querySelector("#displayData");
    displayRow.innerHTML = "";
    var h2 = document.createElement("h2");
    h2.innerHTML = "Result : " + storeResult;
    displayRow.appendChild(h2);
};
var chunkOperation = function () {
    var data = document.querySelector("#array1").value.split(" ");
    var chunkSize = document.querySelector("#chunks").value;
    var resultArray = [];
    var tempArray = [];
    for (var i = 0; i < data.length; i++) {
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
var reduceOperation = function () {
    var data = document.querySelector("#array2").value
        .split(" ")
        .map(Number);
    var initialValue = document.querySelector("#initialValue").value;
    var operation = document.querySelector("#operation1")
        .value;
    var result = initialValue ? parseInt(initialValue) : 0;
    var availableOperations = {
        "+": function (a, b) { return a + b; },
        "-": function (a, b) { return a - b; },
        "*": function (a, b) { return a * b; },
        "/": function (a, b) { return a / b; }
    };
    for (var i = 0; i < data.length; i++) {
        result = availableOperations[operation](result, data[i]);
    }
    display(result);
};
var filterOperation = function () {
    var data = document.querySelector("#array3").value
        .split(" ")
        .map(Number);
    var operator = document.querySelector("#operation2")
        .value;
    var compareValue = parseInt(document.querySelector("#filterValue").value);
    var resultArray = [];
    var availableOperations = {
        ">": function (a, b) { return a > b; },
        ">=": function (a, b) { return a >= b; },
        "<": function (a, b) { return a < b; },
        "<=": function (a, b) { return a <= b; },
        "===": function (a, b) { return a === b; },
        "==": function (a, b) { return a == b; },
        "!=": function (a, b) { return a != b; },
        "!==": function (a, b) { return a !== b; }
    };
    for (var i = 0; i < data.length; i++) {
        if (availableOperations[operator](data[i], compareValue)) {
            resultArray.push(data[i]);
        }
    }
    display(resultArray);
};
var findOperation = function () {
    var data = document.querySelector("#array4").value.split(" ");
    var element = document.querySelector("#findValue")
        .value;
    var result = -1;
    for (var i = 0; i < data.length; i++) {
        if (data[i] == element) {
            result = i + 1;
            break;
        }
    }
    display(result);
};
var sumOperation = function () {
    var data = document.querySelector("#array5").value
        .split(" ")
        .map(Number);
    var result = 0;
    for (var i = 0; i < data.length; i++) {
        result += data[i];
    }
    display(result);
};
document.querySelector(".container").addEventListener("click", function (event) {
    var operation = event.target.value;
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
