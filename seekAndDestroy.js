function destroyer(...arr) {
  let answer = arr[0];

  for(let i = 1; i < arr.length; i++){
    for(let j = 0; j < answer.length;j++){
      if(answer[j] == arr[i]){
        answer.splice(j,1);
        j--;
      }
    }
  }
  console.log(answer);
  return answer;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)
destroyer([3, 5, 1, 2, 2], 2, 3, 5)