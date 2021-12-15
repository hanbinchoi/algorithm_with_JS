// function solution(s) {
//   let answer = '';
//   const numDict = {
//     one: '1',
//     two: '2',
//     three: '3',
//     four: '4',
//     five: '5',
//     six: '6',
//     seven: '7',
//     eight: '8',
//     nine: '9',
//     zero: '10',
//   };
//   let idx = 0;
//   let textNumber = '';
//   while (true) {
//     if (isNaN(s[idx])) {
//       textNumber += s[idx];
//       idx++;
//     } else {
//       answer += s[idx];
//       idx++;
//     }
//     if (Object.keys(numDict).includes(textNumber)) {
//       answer += numDict[textNumber];
//       textNumber = '';
//     }
//     if (idx === s.length) {
//       break;
//     }
//   }
//   return Number(answer);
// }
function solution(s) {
  let numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    console.log(arr);
    answer = arr.join(i);
    console.log(answer, i);
  }

  return Number(answer);
}

console.log(solution('one4seveneight'));
