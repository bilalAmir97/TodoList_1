#! /usr/bin/env node

import inquirer from "inquirer"
let todos= []
let condition = true;

while(condition){
let addTask = await inquirer.prompt(
    [
        {
            name:"todo",
            type:"input",
            message:"What you want to add in Todo's?"
        },
        {
            name:"addMore",
            type:"confirm",
            message:"Do you wanna add more Todo's?",
            default:"false"
        }
    ]
)
todos.push(addTask.todo)
condition = addTask.addMore
console.log(todos)
}