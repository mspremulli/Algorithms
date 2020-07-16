// Complete the staircase function below.
function staircase(n) {
  for(let i = 1; i < n+1; i++){
    process.stdout.write(" ".repeat(n-i));
    console.log("#".repeat(i));
  }

}

staircase(6);