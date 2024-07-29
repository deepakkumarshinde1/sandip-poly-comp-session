const fs = require("fs");
let path = "./public/index.html";
fs.readFile(path, function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data.toString());
  }
});
