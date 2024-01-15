function convertToCSV() {
    const jsonInput = document.getElementById('jsonInput').value;

    try {
        const jsonData = JSON.parse(jsonInput);
        const csvData = convertJSONToCSV(jsonData); // parse input & convert

        const csvOutput = document.getElementById('csvOutput'); 
        csvOutput.value = csvData; // locate & modify ouput element

    } catch (error) {
        alert('Invalid JSON format!'); 
    }
}

function convertToJSON() {
    const csvData = document.getElementById('csvInput').value;

    try { 
        const jsonData = convertCSVtoJSON(csvData); // convert input

        const jsonOutput = document.getElementById('jsonOutput');
        jsonOutput.value = jsonData;  // locate & modify ouput element

    } catch (error) {
        alert('Invalid CSV format!');
    }
}

function convertJSONToCSV(jsonData) {
    const arrayKey = Object.keys(jsonData);
    var csvRows = "";
    const array = jsonData[arrayKey]; // get array section of JSON

    const headers = Object.keys(array[0]);
    csvRows += headers.join(',') + "\n";

    for (let i = 0; i < array.length; i++) { // iterate through array items
        const values = Object.values(array[i]);
        csvRows += values.join(',') + "\n"; // store item values in csv row
    } 

    return csvRows;
}


function convertCSVtoJSON(csvData) {
    var rows = csvData.split("\n"); // split csv rows
    var keys = rows[0].split(','); // identify array keys
    var jsonArray = [];

    for (var i = 1; i < rows.length; i++) { // iterate through rows
        var items = rows[i].split(','); // identify each set of values
        var obj = {}; 

        for (var j = 0; j < keys.length; j++) {
            obj[keys[j]] = items[j]; // store each value in json object
        }

        jsonArray.push(obj);
    }

    const jsonObj = {};
    jsonObj.json = jsonArray; // store in object
    var jsonString = JSON.stringify(jsonObj);

    return jsonString;
}

function switchConversion() { // hide current conversion type, show second conversion type
    var hidden = document.getElementById("hidden");
    var visible = document.getElementById("visible");

    hidden.id = "visible"
    visible.id = "hidden"
}