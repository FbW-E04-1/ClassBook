function nameOfCity(string) {
  // check if "string" starts with "Los" or "New"
  // use the .slice() method
  // check if the first 3 characters of "string" are equal to "los" or
  // equal to "new"
}

nameOfCity("Los Angeles");

let sequenceArray = [];
function geometricalSequence(sequenceArray) {
  console.log(sequenceArray.join());
}
console.log(geometricalSequence([1, 2, 4, 8, 16, 32, 64, 128, 256]));

function missingAngle(ang1, ang2) {
  if (typeof ang1 === "number" && typeof ang2 === "number") {
    let ang3 = 180 - ang1 - ang2;
    if (ang3 > 0 && ang3 < 90) {
      return "acute";
    } else if (ang3 === 90) {
      return "right angel";
    } else if (ang3 > 90) {
      return "obtuse";
    }
    return "insert valid Num";
  }
  return "insert a NUMBER";
}
console.log(missingAngle("sd", 70));


function powerOf(num){
    if (typeof(num)=== "number" ) {
        result=1
        for (let i = 0; i < num; i++) {
            result= num *result
        }
        return result
    }else return "insert number"
}
console.log(powerOf(5));