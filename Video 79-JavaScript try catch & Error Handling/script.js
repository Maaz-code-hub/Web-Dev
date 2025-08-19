let a = prompt("Enter first number : ");

let b = prompt("Enter second number : ");
if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Sorry this error is not acceptable!!");
}

let sum = parseInt(a) + parseInt(b);

function name() {
  let x = 1;
  try {
    console.log("The sum is ", sum * x);
    return true;
  } catch (error) {
    console.log("Error aa gaya bhai");
    return false;
  } finally {
    console.log("Files are beign closed and DB connection is being closed");
  }
}

let c = main();
