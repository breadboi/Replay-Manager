const fs = require("fs");

function searchBtnChange() {
    var fileArray = fs.readdir(".", (err, files) => {
        document.getElementById("searchresultstarget").innerHTML = "";
        'use strict';
        //if an error is thrown when reading the directory, we throw it. Otherwise we continue
        if (err) throw  err;
        //the files parameter is an array of the files and folders in the path we passed. So we loop through the array, printing each file and folder
        for (let file of files) {
            document.getElementById("searchresultstarget").innerHTML += (file + "<br />");
        }
    });    
}