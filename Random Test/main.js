data = [];
var dataSRC = "";

for (i = 0; i < 100; i++){
   dataSRC += Math.round(Math.random() * (9 - 0) + 0);
}

//// DEBUG:
console.log(dataSRC);

data.push(dataSRC.split(""));
