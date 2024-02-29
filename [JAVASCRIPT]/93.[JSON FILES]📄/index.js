// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3]

//        JSON.stringify() - converts a JS object into a JSON string
//        JSON.parse() - converts a JSON string into a JS object

fetch("people.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("Error: ", error);
    });
