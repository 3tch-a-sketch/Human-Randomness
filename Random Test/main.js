const max = "9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"
const min = "0"

data = [];
var dataSRC = "";

for (i = 0; i < 100; i++){
   dataSRC += Math.round(Math.random() * (9 - 0) + 0);
}

console.log(dataSRC);
