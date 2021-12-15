function solution(lottos, win_nums) {
  let answer = [];
  let rankFreq = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };
  let correctNum = lottos.filter((x) => win_nums.includes(x)).length;
  const zeroCount = lottos.filter((x) => x === 0).length;
  let highRank = correctNum + zeroCount;
  answer.push(rankFreq[highRank]);
  answer.push(rankFreq[correctNum]);

  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
