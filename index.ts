#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstnumber" },
  { message: "Enter second number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operator to perform operation",
    type: "list",
    name: "operators",
    choices: ["addition", "substraction", "multiplication", "division"],
  },
]);

// conditional statement

if(answer.operators ==="addition"){
    console.log(  answer.firstnumber + answer.secondnumber)
}
else if (answer.operators ==="substraction"){
    console.log(  answer.firstnumber - answer.secondnumber)
}
else if (answer.operators ==="multiplication"){
    console.log(  answer.firstnumber * answer.secondnumber)
}
else if (answer.operators ==="division"){
    console.log(  answer.firstnumber / answer.secondnumber)
}
