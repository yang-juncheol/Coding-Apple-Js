var 출석부 = ["흥민", "영희", "철수", "재석"];

function 이름찾기(name) {
  for (var i = 0; i < 4; i++) {
    if (name == 출석부[i]) {
      console.log("있어요");
    } else {
      console.log("없어요");
    }
  }
}

for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(i * j);
  }
}

var arr = [10, 20, 30, 40, 50];

function 함수(arr, b) {
  var result = 0;

  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }

  if (result / arr.length < b) {
    sum = b - result;
    console.log("와" + sum + "점이나 올랐네요");
  } else {
    console.log("같거나 떨어졌네요 재수추천");
  }
}
